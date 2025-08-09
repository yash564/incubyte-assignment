# String Calculator TDD Kata (JavaScript)

A JavaScript implementation of the **String Calculator Kata** using **Test-Driven Development (TDD)** principles with **Jest**.

## 📋 Requirements

The `add(numbers)` function supports:

1. **Empty string** → returns `0`
2. **Single number** → returns the number itself  
   Example: `"1"` → `1`
3. **Two numbers** → returns their sum  
   Example: `"1,5"` → `6`
4. **Multiple numbers** → returns the total sum  
   Example: `"1,2,3,4"` → `10`
5. **New lines as delimiters**  
   Example: `"1\n2,3"` → `6`
6. **Custom delimiters** using `//[delimiter]\n` syntax  
   Example: `"//;\n1;2"` → `3`
7. **Negative numbers** → throws an error with all negative numbers listed  
   Example: `"1,-2,3,-4"` → Error: `"negative numbers not allowed: -2,-4"`

---

## 🛠 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/yash564/incubyte-assignment.git
cd incubyte-assignment

# Install dependencies
npm install
