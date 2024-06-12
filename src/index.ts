import "reflect-metadata"
import app from './app'
import {AppDataSource} from './db'

async function main(){
  try {
    await AppDataSource.initialize()
    console.log('Database Connected')
    const port = 1234
    app.listen(port)
    console.log(`App running on port ${port}.`)
  } catch (error) {
    console.log(error)
  }
}

main();