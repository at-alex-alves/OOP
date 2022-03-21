interface ArtWork {
    title: string,
    description: string,
    yearPublished: number
}

abstract class Artist {
    public name: string;
    public birthDate: Date;
    public publishedWorks: ArtWork[];

    /**
     * Creates a new instance of the Artist class.
     * @param {string} name - The name of the artist.
     * @param {Date} birthDate - The date of birth of the artist.
     * @param {ArtWork[]} publishedWorks - The array of ArtWork objects.
     */
    constructor(name: string, birthDate: Date, publishedWorks: ArtWork[]) {
        this.name = name;
        this.birthDate = birthDate;
        this.publishedWorks = publishedWorks;
    }

    /**
     * Adds a work to the publishedWorks array property.
     * @param {ArtWork} work - The ArtWork to be added.
     */
    abstract addWork(work: ArtWork): void;
}

class Writer extends Artist {

    /**
     * Creates a new instance of the Writer class.
     * @param {string} name - The name of the author.
     * @param {Date} birthDate - The date of birth of the artist.
     * @param {ArtWork[]} publishedWorks - The array of ArtWork objects.
     */
    constructor(name: string, birthDate: Date, publishedWorks: ArtWork[]) {
        super(name, birthDate, publishedWorks);
    }

    /**
     * AddWork adds a work to the publishedWorks array.
     * @param {ArtWork} work - The work to be added to the publishedWorks array.
     */
    addWork(work: ArtWork): void {
        this.publishedWorks.push(work);
    }
}

/**
 * Creates a Writer object and adds two works to it.
 */
export function test() {
    console.log('\n\nAbstraction:\n');

    var writer = new Writer('Charles Dickens', new Date('02/07/1812'), []);

    console.log(writer);

    writer.addWork({
        'title': 'Great Expectations',
        'description': 'With its thrilling story that is also a profound look at the moral education of a boy who has been persecuted and deceived but whose essential goodness of heart eventually rescues him from ' +
            'snobbery and delusion. Everything is in harmony in this almost perfect novel: the character of Pip himself, and his interaction with the immense figures of the convict Magwitch, the embittered and' +
            ' half-mad Miss Havisham, and the beautiful, cold Estella. This is Dickens’s most finely crafted book, and his most moving.',
        'yearPublished': 1861
    });

    writer.addWork({
        'title': 'Our Mutual Friend',
        'description': 'His final complete novel, with its vast panoply of characters, its emotional generosity, its ' +
            'violent drama, its rich humor – and its author’s most likeable (because imperfect) heroine, Bella ' +
            'Wilfer. I’ve actually read this book aloud twice, and still find it irresistible.',
        'yearPublished': 1865
    });

    console.log(writer);
}