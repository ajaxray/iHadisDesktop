var Book = BaseModel.extend({
    urlRoot: '/books',

	defaults : {
        'title' : null,
        'collector' : null,
        'chapters' : null
    },

    initialize: function() {
        return this;
    },

    loadChapters: function(force) {
        if(force || _.isNull(this.get('chapters'))) {
            this.set('chapters', new ChapterCollection([
                {id: 1, title: {bn: 'ঈমান অধ্যায়', en: 'Revelation', ar: 'كتاب بدء الوحى'}},
                {id: 2, title: {bn: 'ইলম অধ্যায়', en: 'Belif', ar: 'كتاب الإيمان'}},
                {id: 3, title: {bn: 'উয অধ্যায়', en: 'Ablutions (Wudu)', ar: 'كتاب الوضوء'}},
                {id: 4, title: {bn: 'গোসল অধ্যায়', en: 'Bathing (Ghusl)', ar: 'كتاب الغسل'}},
                {id: 5, title: {bn: 'হায়য অধ্যায়', en: 'Menstrual Periods', ar: 'كتاب الحيض'}},
                {id: 6, title: {bn: 'তায়াম্মুম অধ্যায়', en: 'Rubbing hands and feet with dust (Tayammum)', ar: 'كتاب بدء الوحى'}},
                {id: 7, title: {bn: 'সালা অধ্যায়', en: 'Prayers (Salat)', ar: 'كتاب الصلاة'}}
            ]));
        }
    }

});
   