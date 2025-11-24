# Contributing to Template Nuxt3

## Repository Access Control

This repository is configured with strict access control to ensure code quality and security.

### Who Can Update Code

Currently, only the repository owner (@Phonesavang) has permission to:
- Push directly to the main/master branch
- Approve and merge pull requests
- Modify repository settings
- Manage branch protection rules

### For Contributors

If you would like to contribute to this project:

1. **Fork the Repository**: Create your own fork of the repository
2. **Make Changes**: Work on your changes in your fork
3. **Submit a Pull Request**: When ready, submit a PR for review
4. **Wait for Approval**: The repository owner will review and approve changes

### Branch Protection Rules

To enable the protection rules configured in this repository:

1. Go to Repository Settings → Branches
2. Add a branch protection rule for your default branch (main/master)
3. Enable the following settings:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (set to 1)
   - ✅ Require review from Code Owners
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require conversation resolution before merging
   - ✅ Restrict who can push to matching branches (add only your username)
   - ✅ Do not allow bypassing the above settings

### Code Review Process

All code changes must:
1. Be reviewed by the repository owner
2. Pass all automated checks
3. Follow the coding guidelines in `.copilot-instructions.md`
4. Include appropriate tests and documentation

## Development Setup

Please refer to the [README.md](README.md) for development setup instructions.

## Questions?

If you have questions about contributing, please open an issue for discussion.
