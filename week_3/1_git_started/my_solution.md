## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Adds new files to the repo. Even if you have created new files, they will not be added to the snapshot when you commit until you add the file.

#### branch
Adds a branch to your repo. You can make your own set of files and changes within a branch without effecting the master.

#### checkout
Lets you take a look at other repos.

#### clone
Makes a copy of a repo so you can work on it.

#### commit
Commits any changes you have made, essentially making a snapshot of your work. Use -m "Message" to add a message after the commit.

#### fetch
Pulls down any changes from GitHub, but does not merge them. Doing a fetch and then merge causes less problems than doing pull.

#### log
Shows a log of commits, so you can look at the history of commits in your repo.

#### merge
After working on a branch, this allows you to merge your changes back to the master branch, so others may see your changes.

#### pull
Pulls down any changes from GitHub and merges them into your local repo.

#### push
Pushes all of your commit changes up to GitHub.

#### reset
This has three functions. reset HEAD unstages a file that was ready for commit, meaning you can commit other files without commiting the one you just unstaged. reset --soft rolls back the last commit and keeps the file staged, ready to be committed again if needed. reset --hard unstages the file and also rolls back to the last commit. This is usually a bad idea.

#### rm
Removes a file from your repo. You will need to add it again to have it tracked in your snapshots.

#### status
Checks the status of your repo, tells you which branch you're currently in, and which changes need to be commited.

## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Reflection
Well, as much as I like the Git desktop application, I suppose learning to do this by command line will be good. It was confusing at first, trying to figure out all of the correct commands. Every time I save a file that I'm working on, I have to re-add it in the console. That is extremely annoying, since I haven't really added a new file, I've just made changes to an existing one. Trying to commit a file without adding a message puts me into VIM, and from there I'm basically screwed. Good luck getting out of there. So I've made a mental note NEVER to forget adding a message with -m"message" when I do a commit. Additionally, it kept asking me for a username and password every time I'd try to push, so I had to do a bunch of research on how to change my repository from HTTPS to SSH, so I could use the SSH keys and not need to put in a username and password. After all of that was sorted out, it's working a little better now. I just have to get used to how all of this works. Now I shall attempt to push this file up, we'll see if what I've learned can make it work!