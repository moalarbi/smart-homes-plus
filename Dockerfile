# استخدام صورة Node.js مستقرة
FROM node:20-alpine AS builder

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

# مرحلة التشغيل
FROM node:20-alpine

WORKDIR /app

# تثبيت خادم بسيط لتقديم الملفات الثابتة
RUN npm install -g serve

# نسخ الملفات المبنية فقط من مرحلة البناء
COPY --from=builder /app/dist ./dist

# تعيين المنفذ
EXPOSE 3000

# أمر التشغيل
CMD ["serve", "-s", "dist", "-l", "3000"]
