const { Client } = require('pg');

application.use(cors())

// URL koneksi ke PostgreSQL di server remote
const client = new Client({
  host: 'REMOTE_HOST',        // Ganti dengan alamat IP atau domain server PostgreSQL
  port: 5432,                 // Port default PostgreSQL
  user: 'postgres',       // Ganti dengan username PostgreSQL
  password: 'postgres',   // Ganti dengan password PostgreSQL
  database: 'db_tracking_point',   // Ganti dengan nama database
});

client.connect()
  .then(() => {
    console.log('Koneksi ke PostgreSQL berhasil!');
  })
  .catch(err => {
    console.error('Koneksi gagal', err.stack);
  });
