///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const bcrypt = require("bcryptjs")
const User = require("../models/User")


///////////////////////////////
// Custom Middleware Functions
////////////////////////////////
// authorization: check if user is logged in, add req.user
const addUserToRequest = async (req, res, next) => {
    // check if the user is logged in
    if (req.session.userId) {
        req.user = await User.findById(req.session.userId)
        next()
    } else {
        next()
    }
}

// authorization: check if req.user exists; if not, redirect to login
const isAuthorized = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.redirect("/auth/login")
    }
}

// ///////////////////////////////
// // Router Specific Middleware
// ////////////////////////////////
router.use(addUserToRequest)

// ///////////////////////////////
// // Router Routes
// ////////////////////////////////
router.get("/", (req, res) => {
    res.render("index")
})

router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})

// AUTH RELATED ROUTES
// SIGNUP ROUTE
router.get("/auth/signup", (req, res) => {
    res.render("auth/signup")
} )
router.post("/auth/signup", async (req, res) => {
    try {
        // generate our salt
        const salt = await bcrypt.genSalt(10)
        console.log(req.body)
        // hash the password
        req.body.password = await bcrypt.hash(req.body.password, salt)
        console.log(req.body)
        // create the new user
        await User.create(req.body)
        // res.redirect
        res.redirect("/auth/login")
    } catch(error){
        res.json(error)
    }
})

//Login Routes
router.get("/auth/login", (req, res) => {
    res.render("auth/login")
})
router.post("/auth/login", async (req, res) => {
    try {
        // get the user
        const user = await User.findOne({username: req.body.username})
        if (user) {
            // check if the passwords match
            const result = await bcrypt.compare(req.body.password, user.password)
            if (result) {
                // add userID property to the session object
                req.session.userId = user._id
                // redirect
                res.redirect("/dashboard")
            } else {
                res.json({error: "Password Does Not Match"})
            }
        } else {
            res.json({error: "User Doesn't Exist"})
        }
    } catch(error) {
        res.json(error)
    }
})

//logout
router.get("/auth/logout", (req, res) => {
    // remove the userId property
    req.session.userId = null
    // redirect to main page
    res.redirect("/")
});

// CLIMBS (INDEX)
router.get("/climbs", isAuthorized, async (req, res) => {
        res.render("climbs", {
            boulders: req.user.boulders
    });
});

// NEW
router.get("/climbs/new", isAuthorized, async (req, res) => {
    res.render("new")
});

// DELETE
router.delete("/climbs/:id", isAuthorized, (req, res) => {
    const user = req.user
    const index = user.boulders.findIndex((boulder) => {
        return req.params.id === `${boulder._id}`
    })
    user.boulders.splice(index, 1)
    user.save()
    res.redirect("/climbs")
    });


// UPDATE
router.put("/climbs/id", isAuthorized, async (req, res) => {
    if (req.body.slab === "on") {
        req.body.slab = true;
    } else {
        req.body.slab = false;
    }
    if (req.body.vertical === "on") {
        req.body.vertical = true;
    } else {
        req.body.vertical = false;
    }
    if (req.body.overhung === "on") {
        req.body.overhung = true;
    } else {
        req.body.overhung = false;
    }
    if (req.body.jugs === "on") {
        req.body.jugs = true;
    } else {
        req.body.jugs = false;
    }
    if (req.body.crimps === "on") {
        req.body.crimps = true;
    } else {
        req.body.crimps = false;
    }
    if (req.body.slopers === "on") {
        req.body.slopers = true;
    } else {
        req.body.slopers = false;
    }
    if (req.body.pinches === "on") {
        req.body.pinches = true;
    } else {
        req.body.pinches = false;
    }
    if (req.body.pockets === "on") {
        req.body.pockets = true;
    } else {
        req.body.pockets = false;
    }
    if (req.body.volumes === "on") {
        req.body.volumes = true;
    } else {
        req.body.volumes = false;
    }
    if (req.body.cracks === "on") {
        req.body.cracks = true;
    } else {
        req.body.cracks = false;
    }
    if (req.body.aretes === "on") {
        req.body.aretes = true;
    } else {
        req.body.aretes = false;
    }
    if (req.body.edging === "on") {
        req.body.edging = true;
    } else {
        req.body.edging = false;
    }
    if (req.body.smearing === "on") {
        req.body.smearing = true;
    } else {
        req.body.smearing = false;
    }
    if (req.body.flagging === "on") {
        req.body.flagging = true;
    } else {
        req.body.flagging = false;
    }
    if (req.body.stemming === "on") {
        req.body.stemming = true;
    } else {
        req.body.stemming = false;
    }
    if (req.body.bathanging === "on") {
        req.body.bathanging = true;
    } else {
        req.body.bathanging = false;
    }
    if (req.body.liebacking === "on") {
        req.body.liebacking = true;
    } else {
        req.body.liebacking = false;
    }
    if (req.body.mantling === "on") {
        req.body.mantling = true;
    } else {
        req.body.mantling = false;
    }
    if (req.body.dropkneeing === "on") {
        req.body.dropkneeing = true;
    } else {
        req.body.dropkneeing = false;
    }
    if (req.body.sidepulling === "on") {
        req.body.sidepulling = true;
    } else {
        req.body.sidepulling = false;
    }
    if (req.body.palming === "on") {
        req.body.palming = true;
    } else {
        req.body.palming = false;
    }
    if (req.body.dynoing === "on") {
        req.body.dynoing = true;
    } else {
        req.body.dynoing = false;
    }
    if (req.body.gastoning === "on") {
        req.body.gastoning = true;
    } else {
        req.body.gastoning = false;
    }
    if (req.body.heelhooking === "on") {
        req.body.heelhooking = true;
    } else {
        req.body.heelhooking = false;
    }
    if (req.body.toehooking === "on") {
        req.body.toehooking = true;
    } else {
        req.body.toehooking = false;
    }
    if (req.body.lockingoff === "on") {
        req.body.lockingoff = true;
    } else {
        req.body.lockingoff = false;
    }
    const user = req.user
    const index = user.boulders.findIndex((boulder) => {
        return req.params.id === `${boulder._id}`
    })
    user.boulders[index] = {...user.boulders[index], ...req.body}
    user.save()
    res.render("show", {
        boulder: req.user.boulders
    })
});

// CREATE
router.post("/climbs", isAuthorized, async (req, res) => {
    const user = await User.findOne({username: req.user.username})
    if (req.body.slab === "on") {
        req.body.slab = true;
    } else {
        req.body.slab = false;
    }
    if (req.body.vertical === "on") {
        req.body.vertical = true;
    } else {
        req.body.vertical = false;
    }
    if (req.body.overhung === "on") {
        req.body.overhung = true;
    } else {
        req.body.overhung = false;
    }
    if (req.body.jugs === "on") {
        req.body.jugs = true;
    } else {
        req.body.jugs = false;
    }
    if (req.body.crimps === "on") {
        req.body.crimps = true;
    } else {
        req.body.crimps = false;
    }
    if (req.body.slopers === "on") {
        req.body.slopers = true;
    } else {
        req.body.slopers = false;
    }
    if (req.body.pinches === "on") {
        req.body.pinches = true;
    } else {
        req.body.pinches = false;
    }
    if (req.body.pockets === "on") {
        req.body.pockets = true;
    } else {
        req.body.pockets = false;
    }
    if (req.body.volumes === "on") {
        req.body.volumes = true;
    } else {
        req.body.volumes = false;
    }
    if (req.body.cracks === "on") {
        req.body.cracks = true;
    } else {
        req.body.cracks = false;
    }
    if (req.body.aretes === "on") {
        req.body.aretes = true;
    } else {
        req.body.aretes = false;
    }
    if (req.body.edging === "on") {
        req.body.edging = true;
    } else {
        req.body.edging = false;
    }
    if (req.body.smearing === "on") {
        req.body.smearing = true;
    } else {
        req.body.smearing = false;
    }
    if (req.body.flagging === "on") {
        req.body.flagging = true;
    } else {
        req.body.flagging = false;
    }
    if (req.body.stemming === "on") {
        req.body.stemming = true;
    } else {
        req.body.stemming = false;
    }
    if (req.body.bathanging === "on") {
        req.body.bathanging = true;
    } else {
        req.body.bathanging = false;
    }
    if (req.body.liebacking === "on") {
        req.body.liebacking = true;
    } else {
        req.body.liebacking = false;
    }
    if (req.body.mantling === "on") {
        req.body.mantling = true;
    } else {
        req.body.mantling = false;
    }
    if (req.body.dropkneeing === "on") {
        req.body.dropkneeing = true;
    } else {
        req.body.dropkneeing = false;
    }
    if (req.body.sidepulling === "on") {
        req.body.sidepulling = true;
    } else {
        req.body.sidepulling = false;
    }
    if (req.body.palming === "on") {
        req.body.palming = true;
    } else {
        req.body.palming = false;
    }
    if (req.body.dynoing === "on") {
        req.body.dynoing = true;
    } else {
        req.body.dynoing = false;
    }
    if (req.body.gastoning === "on") {
        req.body.gastoning = true;
    } else {
        req.body.gastoning = false;
    }
    if (req.body.heelhooking === "on") {
        req.body.heelhooking = true;
    } else {
        req.body.heelhooking = false;
    }
    if (req.body.toehooking === "on") {
        req.body.toehooking = true;
    } else {
        req.body.toehooking = false;
    }
    if (req.body.lockingoff === "on") {
        req.body.lockingoff = true;
    } else {
        req.body.lockingoff = false;
    }
    user.boulders.push(req.body);
    await user.save();
    res.redirect("/climbs")
});

// EDIT
router.get("/climbs/:id/edit", (req, res) => {
    const user = req.user
    const index = user.boulders.findIndex((boulder) => {
        return req.params.id === `${boulder._id}`
    })
    	res.render("/climbs/:id/edit")
});


// SHOW
router.get("/climbs/id", isAuthorized, async (req, res) => {

        res.render("show", {
            boulder: foundBoulder
        });
    });

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router