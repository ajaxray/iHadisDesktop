CREATE TABLE books (
	id INTEGER PRIMARY KEY ASC AUTOINCREMENT,
	title TEXT,
	collector TEXT,
	notes TEXT
);

CREATE TABLE chapters (
	id INTEGER PRIMARY KEY ASC AUTOINCREMENT,
	book_id INTEGER REFERENCES book(id),
	title_bn TEXT,
	title_en TEXT,
	title_ar TEXT
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

INSERT INTO hadis (book_id, chapter_id, serial_no, ifa_serial_no, content_bn, content_en, content_ar)
            VALUES(1,       1,          1,         1,
            	   'আবূ বাক্‌র ইব্‌ন শাইবা (র.) …. আবূ হুরায়রা (রা.) থেকে বর্ণিত। তিনি বলেন, একদিন রাসূলুল্লাহ (স.)-এর নিকট গোশ্‌ত আনা হল। তাঁকে রানের গোশত দেয়া হল, এবং এটাই তিনি পছন্দ করতেন। তিনি তা চুষে খেলেন।',
            	   'This is english translation of 1, This is english translation of 1, This is english translation of 1, This is english translation of 1, This is english translation of 1, This is english translation of 1, This is english translation of 1, This is english translation of 1, This is english translation of 1, ',
            	   'ÙØªØ§Ø¨ Ø¨Ø¯Ø¡ Ø§ÙÙØ­Ù ÙØªØ§Ø¨ Ø¨Ø¯Ø¡ Ø§ÙÙØ­Ù ÙØªØ§Ø¨ Ø¨Ø¯Ø¡ Ø§ÙÙØ­Ù ÙØªØ§Ø¨ Ø¨Ø¯Ø¡ Ø§ÙÙØ­Ù ÙØªØ§Ø¨ Ø¨Ø¯Ø¡ Ø§ÙÙØ­Ù ÙØªØ§Ø¨ Ø¨Ø¯Ø¡ Ø§ÙÙØ­Ù ÙØªØ§Ø¨ Ø¨Ø¯Ø¡ Ø§ÙÙØ­Ù ÙØªØ§Ø¨ Ø¨Ø¯Ø¡ Ø§ÙÙØ­Ù'
            	  )