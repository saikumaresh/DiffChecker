export function diffChecker(fileA, fileB) {
    const dp = Array(fileA.length + 1)
      .fill(null)
      .map(() => Array(fileB.length + 1).fill(0));
  
    // Build LCS table
    for (let i = 1; i <= fileA.length; i++) {
      for (let j = 1; j <= fileB.length; j++) {
        if (fileA[i - 1] === fileB[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    // Reconstruct diff
    const diff = [];
    let i = fileA.length, j = fileB.length;
    while (i > 0 && j > 0) {
      if (fileA[i - 1] === fileB[j - 1]) {
        diff.unshift(`  ${fileA[i - 1]}`); // Common line
        i--;
        j--;
      } else if (dp[i - 1][j] >= dp[i][j - 1]) {
        diff.unshift(`- ${fileA[i - 1]}`); // Line in A but not in B
        i--;
      } else {
        diff.unshift(`+ ${fileB[j - 1]}`); // Line in B but not in A
        j--;
      }
    }
  
    while (i > 0) {
      diff.unshift(`- ${fileA[i - 1]}`);
      i--;
    }
  
    while (j > 0) {
      diff.unshift(`+ ${fileB[j - 1]}`);
      j--;
    }
  
    return diff;
  }
  