# 🚀 Quick Start Guide

## Step 1: Install Node.js

If you haven't installed Node.js yet, please download and install it first:
- **Windows/Mac**: Visit [https://nodejs.org/](https://nodejs.org/) to download the LTS version
- **Linux**: Use package manager to install, such as `sudo apt install nodejs npm`

## Step 2: Start the Project

### Method 1: Use Startup Scripts (Recommended)

**macOS/Linux:**
```bash
./start.sh
```

**Windows:**
```cmd
start.bat
```

### Method 2: Manual Startup

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run build

# Start server
npm start
```

## Step 3: Access the Website

After successful startup, the browser will automatically open:
**http://localhost:3000**

## Step 4: Customize Content

1. **Modify personal information**: Edit the `config/site-config.ts` file
2. **Modify styles**: Edit the `styles/main.css` file
3. **Modify functionality**: Edit the `src/main.ts` file

## Common Issues

### Q: What if it shows "Node.js not installed"?
A: Please install Node.js first, then run the startup script again

### Q: What if port 3000 is occupied?
A: Modify the port number in `package.json`, or close the program occupying the port

### Q: How to stop the server?
A: Press `Ctrl+C` in the terminal

### Q: How to deploy online?
A: Run `npm run build`, then upload the `dist` folder to your server

## Next Steps

- 📖 Read [README.md](README.md) to understand detailed features
- 🎨 Check [config/site-config.ts](config/site-config.ts) for customization options
- 🌐 Deploy to GitHub Pages, Netlify, and other platforms

---

**Enjoy using it!** ✨
