module.exports = {
    getHomePage: (req , res) => {
        let query = 'SELECT * FROM players ORDER BY id ASC'
        db.query(query , (err , result) => {
            if(err) res.redirect('/')
            else res.render('index' , {
                title: 'Welcome to socka',
                players: result
            })
        })
    }
}