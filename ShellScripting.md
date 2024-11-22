Script 1: Count Files Less Than 500MB in a Directory
#!/bin/bash

# Get the directory path from the user
read -p "Enter the directory path: " dir

# Count files less than 500MB
count=$(find "$dir" -type f -size -500M | wc -l)

# Display the result
echo "Number of files less than 500MB: $count"
Explanation
#!/bin/bash

Shebang specifies the script interpreter (bash).
read -p "Enter the directory path: " dir

read: Takes input from the user.
-p: Prompts the user with a message.
dir: Variable to store the user's input.
find "$dir" -type f -size -500M

find: Searches for files or directories based on criteria.
"$dir": The directory provided by the user.
-type f: Matches files only.
-size -500M: Filters files smaller than 500MB.
| wc -l

wc -l: Counts the number of lines in the output from find. Each line corresponds to one file.
echo "Number of files less than 500MB: $count"

Displays the result stored in count.
Script 2: Find and Delete Empty Files
#!/bin/bash

# Directory input
read -p "Enter the directory path: " dir

# Find and delete empty files
find "$dir" -type f -empty -exec rm -v {} \;

echo "All empty files in $dir have been deleted."
Explanation
find "$dir" -type f -empty

"$dir": Specifies the directory to search.
-type f: Matches files only.
-empty: Filters for files with 0 bytes.
-exec rm -v {} \;

-exec: Executes a command for each matching file.
rm: Command to delete files.
-v: Verbose mode; shows names of deleted files.
{}: Placeholder for each file found.
\;: Ends the -exec command.
echo

Prints confirmation that empty files were deleted.
Script 3: Monitor Disk Usage
#!/bin/bash

# Check disk usage
usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')

if [ "$usage" -gt 90 ]; then
  echo "Disk usage is critically high: $usage%"
else
  echo "Disk usage is within safe limits: $usage%"
fi
Explanation
df /

Displays disk usage for the root filesystem (/).
awk 'NR==2 {print $5}'

awk: Processes text.
NR==2: Selects the second line (contains disk usage).
{print $5}: Extracts the fifth column (usage percentage).
sed 's/%//'

sed: Stream editor.
s/%//: Removes the % symbol.
if [ "$usage" -gt 90 ]; then ... fi

Compares usage with 90.
Executes appropriate branch (high or safe).
Script 4: API Debugging
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
Explanation
curl -s -o response.json -w "%{http_code}" "$url"

curl: Command-line tool for making HTTP requests.
-s: Silent mode; suppresses progress output.
-o response.json: Saves the response body to response.json.
-w "%{http_code}": Prints the HTTP status code.
"$url": API endpoint.
if [ "$response" -eq 200 ]; then ... fi

Checks if the status code is 200 (OK).
Outputs success or failure message.
cat response.json

Displays the API response saved in response.json.
Command 1: Find the Largest File in a Directory
find . -type f -exec ls -s {} + | sort -n -r | head -n 1
Explanation
find . -type f

Searches the current directory (.) for files.
-exec ls -s {} +

Executes ls -s to show file sizes for all matched files.
+: Groups multiple files in one ls command for efficiency.
sort -n -r

sort: Sorts output.
-n: Numeric sort.
-r: Reverse order (largest first).
head -n 1

Displays the first line (largest file).
Command 2: List Files Modified in the Last 7 Days
find . -type f -mtime -7
Explanation
-type f

Matches files only.
-mtime -7

Finds files modified in the last 7 days.
-7: Files modified less than 7 days ago.
Command 3: Kill a Process by Name
pkill -f process_name
Explanation
pkill

Sends signals to processes by name.
Default signal is TERM (terminate).
-f

Matches the entire command line (not just the name).
Command 4: Monitor a Process
top -p $(pgrep process_name)
Explanation
top

Displays real-time process statistics.
-p

Monitors specific process IDs.
$(pgrep process_name)

Finds process IDs matching process_name.
Command 5: Check Open Ports
netstat -tuln
Explanation
netstat

Displays network statistics.
-tuln

-t: TCP connections.
-u: UDP connections.
-l: Listening ports.
-n: Numeric addresses (avoid name resolution).
Command 6: Ping a Server and Log Results
ping -c 4 example.com | tee ping.log
Explanation
ping -c 4 example.com

Sends 4 ICMP packets to example.com.
| tee ping.log

Writes output to both terminal and ping.log.
