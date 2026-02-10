# استخدام صورة Node.js مستقرة
FROM node:20-alpine

# تعيين دليل العمل
WORKDIR /app

# نسخ ملفات التعريف
COPY package*.json ./

# تثبيت التبعيات
RUN npm install

# نسخ باقي ملفات المشروع
COPY . .

# بناء المشروع
RUN npm run build

# استخدام خادم بسيط لتقديم الملفات الثابتة (بما أن المشروع Vite)
RUN npm install -g serve

# تعيين المنفذ
EXPOSE 3000

# أمر التشغيل
CMD ["serve", "-s", "dist", "-l", "3000"]
