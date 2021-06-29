const yargs = require("yargs");
const { simpanContact, listContact, detailContact, deleteContact } = require("./contacts");

yargs.command(
    {
        command: 'add',
        describe: 'menambah kontak',
        builder:{
            nama:{
                describe: "nama lengkap",
                demandOption: true,
                type: 'string',
            },
            email:{
                describe: "Email",
                demandOption: false,
                type: 'string',
            },
            hp:{
                describe: "Nomor Hp",
                demandOption: true,
                type: 'string',
            },
        },

        handler(argv){
            const contact = {
                nama: argv.nama,
                email: argv.email,
                hp: argv.hp
            };

        simpanContact(argv.nama, argv.email, argv.hp);
        }
    },    
).demandCommand();

// list contact

yargs.command(
    {
        command: 'list',
        describe: 'menampikan kontak',

        handler(){
            listContact();
        }
    },    
);

//detail

yargs.command(
    {
        command: 'detail',
        describe: 'menampilkan detail kontak berdasar nama',
        builder:{
            nama:{
                describe: "nama lengkap",
                demandOption: true,
                type: 'string',
            },
        },

        handler(argv){
            detailContact(argv.nama);
        }
    },    
);

//hapus

yargs.command(
    {
        command: 'delete',
        describe: 'menghapus kontak berdasar nama',
        builder:{
            nama:{
                describe: "nama lengkap",
                demandOption: true,
                type: 'string',
            },
        },

        handler(argv){
            deleteContact(argv.nama);
        }
    },    
);

yargs.parse();


// const {tulisPertanyaan, simpanContact} = require('./contacts');

// const main = async () => {
//     const nama  = await tulisPertanyaan('Masukan nama : ');
//     const email = await tulisPertanyaan('Masukan email : ');
//     const hp    = await tulisPertanyaan('Masukan nomor hp : ');

//     simpanContact(nama, email, hp);
// }

// main();