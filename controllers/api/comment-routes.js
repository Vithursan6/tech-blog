const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

router.get('/:id', (req, res) => {
  Comment.findOne({
    where: {
      id:req.params.id
    },
    attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at', 'updated_at' ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.put('/:id', (req,res) => {
  Comment.update({
    comment_text: req.body.comment_text,
    comment_id: req.body.comment_id
  },
  { where: {
    id:req.params.id
  }})
  .then(dbPostData => {
    if(!dbPostData) {
        res.status(404).json({ message: 'No comment with this id was found'});
        return;
}
res.json(dbPostData);
})  
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});

})

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'No comment with this id was found'});
            return;
    }
    res.json(dbCommentData);
    })  
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;