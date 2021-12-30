read $staging_files
git add $staging_files

read $commit_message
git commit -m $commit_message

read $remote
read $branch
git push $remote $branch