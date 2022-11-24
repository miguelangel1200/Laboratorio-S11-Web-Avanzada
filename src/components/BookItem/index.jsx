import {
    Paper,
    Box,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material'

const BookItem = ({book}) => {
    return (
        <Paper elevation={3}>
            <CardMedia 
            component="img" 
            image={book.volumeInfo?.imageLinks?.thumbnail} 
            height={500} 
            
            />
            <CardContent>
                <Box>
                    <Typography my={2} variant="h6">{book.volumeInfo.title}</Typography>
                    <Typography variant="h7">{book.volumeInfo.description}</Typography>
                </Box>
            </CardContent>
        </Paper>
    )
}

export default BookItem