CREATE TABLE books (
	id INTEGER PRIMARY KEY ASC AUTOINCREMENT,
	title TEXT,
	collector TEXT,
	notes TEXT
);

CREATE TABLE chapter (
	id INTEGER PRIMARY KEY ASC AUTOINCREMENT,
	book_id INTEGER REFERENCES book(id),
	title_bn TEXT,
	title_en TEXT,
	title_ar TEXT,
);

CREATE TABLE hadis (
	id INTEGER PRIMARY KEY ASC AUTOINCREMENT,
	book_id INTEGER NOT NULL REFERENCES book(id),
	chapter_id INTEGER REFERENCES chapter(id),
	serial_no INTEGER NOT NULL REFERENCES chapter(id),
	ifa_serial_no INTEGER REFERENCES chapter(id),
	content_bn TEXT,
	content_en TEXT,
	content_ar TEXT
);