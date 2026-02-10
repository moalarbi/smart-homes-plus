# ---- build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- run stage ----
FROM node:20-alpine AS runner
WORKDIR /app

# تثبيت التبعيات الضرورية للتشغيل
COPY package*.json ./
RUN npm install --only=production
RUN npm i -g serve ts-node typescript

# نسخ ملفات الواجهة المبنية
COPY --from=builder /app/dist ./dist
# نسخ ملفات الباكند
COPY --from=builder /app/server ./server

EXPOSE 3000
EXPOSE 8080

# تشغيل الـ API والواجهة معاً
CMD ["sh", "-c", "npx ts-node server/server.ts & serve -s dist -l 3000"]
