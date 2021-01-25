
import express  from 'express'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import dotenv  from 'dotenv'
import connectDB from './config/db.js'
import path from 'path'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import uploadRoutes from './routes/uploadRoutes.js'

connectDB();

dotenv.config()
const app = express()
app.get('/',(req,res) => {
    res.send('Api is running')
})
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV ==='developement') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname,  'frontend', 'build', 'index.html'))


  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}


app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000 
app.listen(PORT,console.log(`server is running${process.env.PORT} on ${PORT}`))