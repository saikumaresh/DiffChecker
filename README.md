
# Shell Scripting, Unix/Linux Commands, and Debugging Guide

## Script 1: Count Files Less Than 500MB in a Directory

```bash
#!/bin/bash
# Get the directory path from the user
read -p "Enter the directory path: " dir

# Count files less than 500MB
count=$(find "$dir" -type f -size -500M | wc -l)

# Display the result
echo "Number of files less than 500MB: $count"
```

### Explanation:
1. **`#!/bin/bash`**: Specifies the script interpreter (`bash`).
2. **`read -p`**: Takes input from the user and stores it in `dir`.
3. **`find "$dir" -type f -size -500M`**: Finds files smaller than 500MB.
4. **`| wc -l`**: Counts lines in the `find` command output.
5. **`echo`**: Displays the count.

---

## Script 2: Find and Delete Empty Files

```bash
#!/bin/bash
# Directory input
read -p "Enter the directory path: " dir

# Find and delete empty files
find "$dir" -type f -empty -exec rm -v {} \;

echo "All empty files in $dir have been deleted."
```

### Explanation:
1. **`find "$dir" -type f -empty`**: Finds empty files.
2. **`-exec rm -v {} \;`**: Deletes each file with a verbose message.
3. **`echo`**: Confirms deletion.

---

## Script 3: Monitor Disk Usage

```bash
#!/bin/bash
# Check disk usage
usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')

if [ "$usage" -gt 90 ]; then
  echo "Disk usage is critically high: $usage%"
else
  echo "Disk usage is within safe limits: $usage%"
fi
```

### Explanation:
1. **`df /`**: Checks disk usage for the root filesystem.
2. **`awk 'NR==2 {print $5}'`**: Extracts usage percentage.
3. **`sed 's/%//'`**: Removes the `%` symbol.
4. **`if`**: Compares usage against 90 and prints appropriate messages.

---

## Script 4: API Debugging

```bash
#!/bin/bash
# API URL
url="https://api.example.com/resource"

# Make the API call
response=$(curl -s -o response.json -w "%{http_code}" "$url")

# Check the HTTP status code
if [ "$response" -eq 200 ]; then
  echo "API call successful. Response:"
  cat response.json
else
  echo "API call failed with status code: $response"
fi
```

### Explanation:
1. **`curl`**: Makes an HTTP request.
2. **`-s -o`**: Silent mode and saves the response body.
3. **`-w "%{http_code}"`**: Displays HTTP status code.
4. **`if`**: Checks for successful status (200).

---

## Command 1: Find the Largest File in a Directory

```bash
find . -type f -exec ls -s {} + | sort -n -r | head -n 1
```

### Explanation:
1. **`find . -type f`**: Searches files in the current directory.
2. **`-exec ls -s`**: Displays file sizes.
3. **`sort -n -r`**: Sorts numerically in reverse order.
4. **`head -n 1`**: Displays the largest file.

---

## Command 2: List Files Modified in the Last 7 Days

```bash
find . -type f -mtime -7
```

### Explanation:
1. **`-type f`**: Matches files only.
2. **`-mtime -7`**: Finds files modified in the last 7 days.

---

## Command 3: Kill a Process by Name

```bash
pkill -f process_name
```

### Explanation:
1. **`pkill`**: Sends terminate signals to processes by name.
2. **`-f`**: Matches the entire command line.

---

## Command 4: Monitor a Process

```bash
top -p $(pgrep process_name)
```

### Explanation:
1. **`top`**: Displays real-time process stats.
2. **`-p`**: Monitors specific processes.
3. **`pgrep`**: Retrieves process IDs.

---

## Command 5: Check Open Ports

```bash
netstat -tuln
```

### Explanation:
1. **`netstat`**: Displays network stats.
2. **`-tuln`**: Shows TCP/UDP listening ports numerically.

---

## Command 6: Ping a Server and Log Results

```bash
ping -c 4 example.com | tee ping.log
```

### Explanation:
1. **`ping -c 4`**: Sends 4 packets to a server.
2. **`| tee`**: Logs results to a file and displays them.

---

Let me know if you need further examples or clarifications!

