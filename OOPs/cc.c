#include <stdio.h>
#include <string.h>

#define MAX_CHAR 26

// Returns minimum changes to str so
// that no substring is repeated.
int minChanges(char* str) {
    int n = strlen(str);

    // If length is more than maximum
    // allowed characters, we cannot
    // get the required string.
    if (n > MAX_CHAR)
        return -1;

    // Variable to store count of
    // distinct characters
    int dist_count = 0;

    // To store counts of different
    // characters
    int count[MAX_CHAR] = {0};

    for (int i = 0; i < n; i++) {
        if (count[str[i] - 'a'] == 0)
            dist_count++;
        count[str[i] - 'a']++;
    }

    // Answer is, n - number of distinct char
    return (n - dist_count);
}

// Driver function
int main() {
    int n;
    scanf("%d", &n);
    int ans[n];

    for (int i = 0; i < n; i++) {
        char str[100];
        scanf("%s", str);
        ans[i] = minChanges(str);
    }

    for (int i = 0; i < n; i++) {
        printf("%d\n", ans[i]);
    }
    return 0;
}