# การตั้งค่าความปลอดภัยและการควบคุมการเข้าถึงโค้ด (Repository Access Control Setup)

## ภาษาไทย

### วิธีการตั้งค่าให้เฉพาะคุณเท่านั้นที่สามารถอัปเดตโค้ดได้

ไฟล์นี้จะอธิบายวิธีการตั้งค่า Repository ให้มีความปลอดภัยและควบคุมว่าใครสามารถแก้ไขโค้ดได้

### ขั้นตอนการตั้งค่า

#### 1. ตั้งค่า Branch Protection Rules

เข้าไปที่ GitHub Repository ของคุณและทำตามขั้นตอน:

1. คลิกที่ **Settings** (การตั้งค่า) ของ Repository
2. ในเมนูด้านซ้าย คลิก **Branches**
3. คลิกปุ่ม **Add rule** หรือ **Add branch protection rule**
4. ใน "Branch name pattern" ใส่ `main` หรือ `master` (ตามชื่อ branch หลักของคุณ)
5. เลือกตัวเลือกต่อไปนี้:

   **ป้องกันการ Push โดยตรง:**
   - ✅ เปิด "Require a pull request before merging"
   - ✅ เปิด "Require approvals" และตั้งค่าจำนวนเป็น 1
   - ✅ เปิด "Require review from Code Owners"
   
   **การตรวจสอบคุณภาพโค้ด:**
   - ✅ เปิด "Require status checks to pass before merging"
   - ✅ เลือก "pr-validation" หรือ CI checks ที่ต้องการ
   - ✅ เปิด "Require conversation resolution before merging"
   
   **จำกัดสิทธิ์การ Push:**
   - ✅ เปิด "Restrict who can push to matching branches"
   - ✅ เพิ่มเฉพาะ username ของคุณ (@Phonesavang)
   - ✅ เปิด "Do not allow bypassing the above settings"
   
   **ป้องกันการลบ:**
   - ✅ เปิด "Restrict deletions"
   - ✅ เปิด "Restrict force pushes"

6. คลิก **Create** หรือ **Save changes**

#### 2. ตั้งค่าสิทธิ์ของ Collaborators

1. ไปที่ **Settings** → **Collaborators and teams**
2. ตรวจสอบรายชื่อคนที่มีสิทธิ์เข้าถึง
3. สำหรับผู้ที่ต้องการให้ช่วยงาน ให้กำหนดสิทธิ์เป็น **Read** เท่านั้น
4. เฉพาะคุณเท่านั้นควรมีสิทธิ์ **Admin** หรือ **Maintain**

#### 3. ใช้งาน CODEOWNERS File

Repository นี้มีไฟล์ `CODEOWNERS` แล้ว ซึ่งกำหนดว่าคุณเป็นเจ้าของโค้ดทั้งหมด

ตรวจสอบว่าไฟล์ `CODEOWNERS` มีข้อมูลถูกต้อง:
- เปิดไฟล์ `CODEOWNERS` ในโฟลเดอร์หลัก
- ตรวจสอบว่ามี `* @Phonesavang` (หรือ username ของคุณ)

#### 4. ตั้งค่า Repository Visibility

1. ไปที่ **Settings** → ไปที่ส่วนล่างสุด
2. ในส่วน "Danger Zone"
3. คลิก **Change repository visibility**
4. เลือก **Private** ถ้าต้องการให้มีเฉพาะคนที่ได้รับอนุญาตเท่านั้นที่เห็นโค้ด

#### 5. เปิดใช้งาน Two-Factor Authentication (2FA)

เพื่อความปลอดภัยเพิ่มเติม:
1. ไปที่ GitHub Settings ของตัวคุณเอง (ไม่ใช่ Repository)
2. คลิก **Password and authentication**
3. เปิดใช้งาน **Two-factor authentication**

### การทำงานของระบบที่ตั้งค่าไว้

หลังจากตั้งค่าแล้ว:

1. **ไม่มีใครสามารถ push โค้ดโดยตรง** ไปยัง branch หลัก (main/master)
2. **ทุกการเปลี่ยนแปลงต้องผ่าน Pull Request** และต้องได้รับการอนุมัติจากคุณ
3. **GitHub Actions จะตรวจสอบโค้ด** ทุกครั้งที่มี PR ใหม่
4. **เฉพาะคุณเท่านั้น** ที่สามารถอนุมัติและ merge PR ได้

### การทำงานร่วมกับผู้อื่น

ถ้าคุณต้องการให้คนอื่นช่วยพัฒนา แต่ยังควบคุมว่าโค้ดอะไรเข้าไป:

1. ให้เขา **Fork Repository** ของคุณ
2. เขาทำงานใน Fork ของเขา
3. เมื่อเสร็จ ให้เขาส่ง **Pull Request** มาที่ Repository ของคุณ
4. คุณจะเป็นคนตรวจสอบและอนุมัติ

---

## English

### How to Configure Repository So Only You Can Update Code

This file explains how to configure your repository for security and control over who can modify the code.

### Setup Steps

#### 1. Configure Branch Protection Rules

Go to your GitHub Repository and follow these steps:

1. Click on **Settings** of your Repository
2. In the left menu, click **Branches**
3. Click **Add rule** or **Add branch protection rule** button
4. In "Branch name pattern", enter `main` or `master` (your default branch name)
5. Select the following options:

   **Prevent Direct Push:**
   - ✅ Enable "Require a pull request before merging"
   - ✅ Enable "Require approvals" and set the number to 1
   - ✅ Enable "Require review from Code Owners"
   
   **Code Quality Checks:**
   - ✅ Enable "Require status checks to pass before merging"
   - ✅ Select "pr-validation" or desired CI checks
   - ✅ Enable "Require conversation resolution before merging"
   
   **Restrict Push Access:**
   - ✅ Enable "Restrict who can push to matching branches"
   - ✅ Add only your username (@Phonesavang)
   - ✅ Enable "Do not allow bypassing the above settings"
   
   **Prevent Deletion:**
   - ✅ Enable "Restrict deletions"
   - ✅ Enable "Restrict force pushes"

6. Click **Create** or **Save changes**

#### 2. Configure Collaborator Permissions

1. Go to **Settings** → **Collaborators and teams**
2. Review the list of people with access
3. For collaborators, set permissions to **Read** only
4. Only you should have **Admin** or **Maintain** access

#### 3. Use CODEOWNERS File

This repository already has a `CODEOWNERS` file that designates you as the owner of all code.

Verify the `CODEOWNERS` file is correct:
- Open the `CODEOWNERS` file in the root folder
- Check that it contains `* @Phonesavang` (or your username)

#### 4. Configure Repository Visibility

1. Go to **Settings** → scroll to the bottom
2. In the "Danger Zone" section
3. Click **Change repository visibility**
4. Select **Private** if you want only authorized people to see the code

#### 5. Enable Two-Factor Authentication (2FA)

For additional security:
1. Go to your personal GitHub Settings (not Repository settings)
2. Click **Password and authentication**
3. Enable **Two-factor authentication**

### How the Configured System Works

After configuration:

1. **No one can push code directly** to the main branch (main/master)
2. **All changes must go through Pull Requests** and require your approval
3. **GitHub Actions will check the code** every time there's a new PR
4. **Only you** can approve and merge PRs

### Working with Others

If you want others to help develop but still control what code gets in:

1. Have them **Fork your Repository**
2. They work in their Fork
3. When done, they send a **Pull Request** to your Repository
4. You review and approve it

---

## Files Added to This Repository

This setup includes the following files:

1. **CODEOWNERS** - Designates you as the code owner for all files
2. **CONTRIBUTING.md** - Guidelines for contributors
3. **.github/workflows/pr-validation.yml** - Automated PR validation
4. **SECURITY_SETUP.md** - This documentation file (in Thai and English)

## Important Notes

- These files provide the foundation for access control
- You must **manually enable Branch Protection Rules** in GitHub Settings
- Branch protection is the most critical step for preventing unauthorized changes
- Regular security audits are recommended

## Questions or Issues?

If you have questions about this setup, please:
1. Review GitHub's official documentation on branch protection
2. Open an issue in this repository for discussion
3. Contact the repository administrator

---

## ข้อมูลเพิ่มเติม (Additional Information)

### ลิงก์ที่เป็นประโยชน์ (Useful Links)

- [GitHub Branch Protection Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [About Code Owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Securing Your Repository](https://docs.github.com/en/code-security/getting-started/securing-your-repository)

### คำแนะนำด้านความปลอดภัย (Security Recommendations)

1. เปลี่ยนรหัสผ่านเป็นประจำ
2. ใช้ SSH Keys แทน HTTPS สำหรับ Git operations
3. ตรวจสอบ Access Logs เป็นประจำ
4. อัปเดต Dependencies เป็นประจำเพื่อป้องกันช่องโหว่ด้านความปลอดภัย
5. ใช้ Secret Scanning และ Dependabot บน GitHub
