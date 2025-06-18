# CHAPTER 01: 👋 Hello, World!

## 🧩 The `<script>` Tag

JavaScript can be embedded almost anywhere in an HTML document using the `<script>` tag.

Here’s a basic example:

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Before the script...</p>

    <script>
      alert("Hello, world!");
    </script>

    <p>...After the script.</p>
  </body>
</html>
```

📌 The code inside the `<script>` tag is automatically executed when the browser processes it.

---

## 📜 A Bit of Script History

The `<script>` tag has a few attributes that are rarely used nowadays but can still be found in old code:

### 🔹 `type` Attribute

```html
<script type="text/javascript">
```

- In **HTML4**, the `type` attribute was required.
- Typically set as `type="text/javascript"`.
- In **modern HTML**, it’s **optional**.
- Today, it’s used for JavaScript **modules**, like `type="module"`, but we’ll cover that later.

### 🔹 `language` Attribute

```html
<script language="JavaScript">
```

- This was meant to specify the script’s language.
- It's now **deprecated**—JavaScript is the **default**.
- You **don’t need to use it** anymore.

### 🔹 Old-Style Comments

In really old tutorials, you might see something like:

```html
<script type="text/javascript">
  <!--
  alert("Hello, old world!");
  //-->
</script>
```

- These were used to **hide JS from old browsers**.
- Totally unnecessary today.
- Can be a sign of **very old code**.

---

## 📁 External Scripts

If your JS code is large or reused, it’s best to keep it in a separate file.

### ✅ Basic Usage

```html
<script src="/path/to/script.js"></script>
```

- The path can be **absolute** (`/path/to/`) or **relative** (`./script.js`).
- You can also use a full URL:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

### 🔗 Multiple Scripts

To include several external scripts, use multiple `<script>` tags:

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

---

## ⚠️ Important Notes

- Only **simple scripts** are written directly in HTML.
- More complex or reusable code goes in **external files**.
- Browsers **cache external files**, which improves performance and reduces bandwidth usage.

---

## ❌ Don’t Mix `src` with Inline Code

This **won’t work**:

```html
<script src="file.js">
  alert(1); // ❌ ignored!
</script>
```

Use separate `<script>` tags instead:

```html
<script src="file.js"></script>
<script>
  alert(1); // ✅ works
</script>
```

---

<br><br>

<p align="right">
  <a href="./02_Code_Structure.md"><b>GO TO NEXT ›</b></a>
</p>

---
