# Quick Setup Guide for Repository Access Control

## For Repository Owner: @Phonesavang

This guide provides the essential steps to enable access control on your repository.

### ⚡ Quick Steps (5 minutes)

1. **Go to your repository on GitHub**: https://github.com/Phonesavang/template_nuxt3

2. **Click "Settings"** (top right of your repository page)

3. **Click "Branches"** (left sidebar)

4. **Click "Add rule"** or "Add branch protection rule"

5. **Configure the rule:**
   - Branch name pattern: `main` or `master`
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1 approval)
   - ✅ Require review from Code Owners
   - ✅ Require status checks to pass (select "pr-validation" if available)
   - ✅ Restrict who can push to matching branches
     - Add only your username: `Phonesavang`
   - ✅ Do not allow bypassing the above settings

6. **Click "Create"** or "Save changes"

### ✅ What This Does

After completing these steps:

- ❌ No one (including you) can push directly to the main branch
- ✅ All changes must go through Pull Requests
- ✅ You must approve all PRs before they can be merged
- ✅ GitHub Actions will automatically check code quality
- ✅ Only you can approve and merge changes

### 📝 Files Added to Your Repository

These files have been added to help with access control:

| File | Purpose |
|------|---------|
| `CODEOWNERS` | Marks you as owner of all code |
| `CONTRIBUTING.md` | Guidelines for contributors |
| `SECURITY_SETUP.md` | Detailed setup instructions (Thai & English) |
| `.github/workflows/pr-validation.yml` | Automated PR checks |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR template for consistency |
| `QUICK_SETUP.md` | This file |

### 🔐 Optional: Make Repository Private

To make the repository visible only to you and invited collaborators:

1. Go to **Settings** → scroll down to "Danger Zone"
2. Click **Change repository visibility**
3. Select **Private**

### 🤝 Working with Others

If someone wants to contribute:

1. They **fork** your repository
2. They make changes in their fork
3. They create a **Pull Request** to your repository
4. You **review and approve** (or request changes)
5. You **merge** when satisfied

### 📖 Detailed Documentation

For more detailed instructions and explanations in both Thai and English, see:
- **[SECURITY_SETUP.md](SECURITY_SETUP.md)** - Complete guide in Thai and English
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contributor guidelines

### 🆘 Need Help?

If you encounter any issues:
1. Read the detailed guide in `SECURITY_SETUP.md`
2. Check GitHub's documentation: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches
3. Open an issue in your repository for discussion

---

## คำแนะนำฉบับย่อ (ภาษาไทย)

### ขั้นตอนเร็ว (5 นาที)

1. ไปที่ Repository: https://github.com/Phonesavang/template_nuxt3
2. คลิก **Settings** 
3. คลิก **Branches**
4. คลิก **Add rule**
5. ใส่ `main` หรือ `master` ในช่อง Branch name pattern
6. เลือกตัวเลือกที่มีเครื่องหมาย ✅ ตามด้านบน
7. ใน "Restrict who can push" ให้เพิ่ม `Phonesavang`
8. คลิก **Create**

### ผลลัพธ์

หลังจากตั้งค่าแล้ว:
- ไม่มีใครสามารถ push โค้ดตรงๆ ได้
- ต้องผ่าน Pull Request เท่านั้น
- คุณจะเป็นคนอนุมัติทุก PR
- มีระบบตรวจสอบโค้ดอัตโนมัติ

อ่านเพิ่มเติมที่: [SECURITY_SETUP.md](SECURITY_SETUP.md)
