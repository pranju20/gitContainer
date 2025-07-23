const gitCategories = [
  {
    title: 'Setup & Configuration',
    commands: [
      { name: 'git config --global user.name "Your Name"', description: 'Set global username' },
      { name: 'git config --global user.email "you@example.com"', description: 'Set global email' },
      { name: 'git init', description: 'Initialize a new repository' },
    ]
  },
  {
    title: 'Basic Snapshotting',
    commands: [
      { name: 'git status', description: 'View changed files' },
      { name: 'git add .', description: 'Stage all changes' },
      { name: 'git commit -m "message"', description: 'Commit with a message' },
    ]
  },
  {
    title: 'Branching & Merging',
    commands: [
      { name: 'git branch', description: 'List branches' },
      { name: 'git checkout -b new-branch', description: 'Create and switch to new branch' },
      { name: 'git merge branch-name', description: 'Merge a branch' },
    ]
  },
  {
    title: 'Remote Repositories',
    commands: [
      { name: 'git remote add origin URL', description: 'Add remote repo' },
      { name: 'git push -u origin main', description: 'Push branch to remote' },
      { name: 'git pull', description: 'Fetch and merge remote changes' },
    ]
  },
  {
    
     title: 'Undo & Reset',
     commands: [
       { name: 'git reset HEAD file', description: 'Unstage a file' },
       { name: 'git checkout -- file', description: 'Discard changes in file' },
       { name: 'git revert commit_id', description: 'Revert a commit' },
       { name: 'git cherry-pick <commit-id>', description: 'Apply changes from a specific commit to the current branch' },
       ]
    },
    {
        title: 'Viewing History',
        commands: [
        { name: 'git log', description: 'View commit history' },
        { name: 'git diff', description: 'Show changes between commits' },
        { name: 'git show commit_id', description: 'Show details of a specific commit' },
        ]
  },
  {
    title: 'Stashing',
    commands: [
      { name: 'git stash', description: 'Stash current changes' },
      { name: 'git stash pop', description: 'Apply stashed changes' },
    ]
  },
];

export default gitCategories;
