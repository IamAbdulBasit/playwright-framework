# Playwright Automation Framework

## Features
- Page Object Model
- Custom Fixtures
- Global Authentication Setup
- Scalable Folder Structure
- UI + API Ready

## Run Tests
npm install
npm run test

## Tech Stack
- Playwright
- JavaScript
- POM
- Fixtures
- Storage State

//////////////////////////////////////////////////

1️⃣ npm test چلاتے ہو
   ↓
2️⃣ playwright.config.js سے global-setup.js چلتی ہے
   ↓
3️⃣ global-setup.js میں:
   - Browser کھولتا ہے
   - test-data.js سے credentials لیتا ہے
   - login.page.js سے login functions استعمال کرتا ہے
   - Login successful → auth.json میں save
   ↓
4️⃣ Tests شروع ہوتے ہیں (tests/specs/ سے)
   ↓
5️⃣ ہر test میں:
   - fixtures سے loginPage آتا ہے
   - auth.json سے پہلے سے logged-in state load ہوتی ہے
   - Test چلتا ہے
   ↓
6️⃣ Test رپورٹ دیکھو

/////////////////////////////////////////////////////

ترتیب	    File	               کب	کیوں
1️⃣	test-data.js	          سب سے پہلے	Data سب جگہ استعمال ہوگا
2️⃣	login.page.js	          دوسرا	Pages test-data استعمال کریں گے
3️⃣	test-fixtures.js	       تیسرا	Fixtures pages استعمال کریں گے
4️⃣	global-setup.js	       چوتھا	Setup pages/data استعمال کریں گی
5️⃣	login.spec.js	          آخر میں	Tests سب کو استعمال کریں گے
6️⃣	playwright.config.js     آخر میں	Global setup connect کرنی ہے

/////////////////////////////////////////////////////////////////////////////////

| Folder      | Purpose           |
| ----------- | ----------------- |
| `specs/`    | WHAT to test      |
| `pages/`    | HOW to interact   |
| `fixtures/` | HOW to setup      |
| `config/`   | WHERE / WHICH ENV |
| `utils/`    | HELPERS           |


/////////////////////////////////////////////////////////////////////////////////

Test starts
 ↓
Fixture loads
 ↓
Global beforeEach runs
 ↓
Page Object used
 ↓
Test executes
 ↓
afterEach runs
 ↓
Report generated

///////////////////////////////////////////////////////////////////////////////////