@echo off
chcp 65001 >nul
echo 🚀 启动程序员个人作品集网站...

REM 检查是否安装了Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误: 未安装Node.js，请先安装Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

REM 检查是否安装了npm
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误: 未安装npm，请先安装npm
    pause
    exit /b 1
)

echo ✅ Node.js版本: 
node --version
echo ✅ npm版本: 
npm --version

REM 安装依赖
echo 📦 安装项目依赖...
npm install

REM 编译TypeScript
echo 🔨 编译TypeScript代码...
npm run build

REM 启动开发服务器
echo 🌐 启动开发服务器...
echo 网站将在浏览器中自动打开: http://localhost:3000
echo 按 Ctrl+C 停止服务器
npm start

pause
