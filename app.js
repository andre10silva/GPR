const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const databaseName = 'GPR';
const collectionName1 = 'LiquidSensor';
const collectionName2 = 'Pressure';
const collectionName3 = 'SoilHumidity';
const AtuadorRega = 'AtuadorRega';
const collectionName5 = 'ReservatoryLevel';


const uri = 'mongodb+srv://projectGPR:7E0dWIWqULWusikI@cluster0.rzeclhi.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

//Adicione a seguinte linha
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    await client.connect();
    res.render('index', {});
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.get('/humidade', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const collection3 = database.collection(collectionName3);
    const docs3 = await collection3.find({}).toArray();
    res.render('humidade', { docs3 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.get('/liquidos', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const collection1 = database.collection(collectionName1);
    const docs1 = await collection1.find({}).toArray();
    res.render('liquidos', { docs1 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.get('/reservatorio', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const collection1 = database.collection(collectionName5);
    const docs2 = await collection1.find({}).toArray();
    res.render('reservatorio', { docs2 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.get('/maquete', async (req, res) => {
  try {
    await client.connect();
    res.render('maquete');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.get('/atuador', async function(req, res) {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const collection4 = database.collection(AtuadorRega);
    const docs4 = await collection4.find().toArray();
    res.render('atuador', { docs4 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});


app.post('/atuador', async function(req, res) {
  try {
    await client.connect();
    const database = client.db(databaseName);
    const collection4 = database.collection(AtuadorRega);

    const radio = req.body.gridRadios; // ID do tipo de pergunta selecionado no form

    let ModoAM, ValorAM;
    if (radio === '0'){
      ValorAM = 'ON'
      ModoAM = 'M'
    }else{
      ValorAM = 'OFF'
      ModoAM ='A'
    }

    const atuadores = {
      Valor: ValorAM,
      Modo: ModoAM,
    };

    // Define the filter to identify the document to be updated
    const filter = {}; // Provide the filter criteria based on your requirements

    // Define the update operation
    const update = {
      $set: atuadores,
    };

    // Perform the update operation
    await collection4.updateOne(filter, update);

    res.redirect('/atuador');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});