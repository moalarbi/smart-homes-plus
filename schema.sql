-- إنشاء قاعدة البيانات إذا لم تكن موجودة
CREATE DATABASE IF NOT EXISTS railway;
USE railway;

-- جدول الفئات (Categories)
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- جدول المنتجات (Products)
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id VARCHAR(50),
    short_desc TEXT,
    image_url VARCHAR(255),
    price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- جدول ميزات المنتجات (Product Features)
CREATE TABLE IF NOT EXISTS product_features (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id VARCHAR(50),
    feature TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- جدول مواصفات المنتجات (Product Specs)
CREATE TABLE IF NOT EXISTS product_specs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id VARCHAR(50),
    spec_key VARCHAR(100),
    spec_value VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- جدول الحلول (Solutions)
CREATE TABLE IF NOT EXISTS solutions (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    description TEXT,
    icon VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول ميزات الحلول (Solution Features)
CREATE TABLE IF NOT EXISTS solution_features (
    id INT AUTO_INCREMENT PRIMARY KEY,
    solution_id VARCHAR(50),
    feature TEXT NOT NULL,
    FOREIGN KEY (solution_id) REFERENCES solutions(id) ON DELETE CASCADE
);

-- جدول سيناريوهات الحلول (Solution Scenarios)
CREATE TABLE IF NOT EXISTS solution_scenarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    solution_id VARCHAR(50),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    FOREIGN KEY (solution_id) REFERENCES solutions(id) ON DELETE CASCADE
);

-- إدخال بيانات أولية للفئات
INSERT IGNORE INTO categories (id, name) VALUES 
('panels', 'لوحات التحكم'),
('lighting', 'الإضاءة الذكية'),
('security', 'الأمان والذكاء'),
('sensors', 'المستشعرات');
