const main = document.getElementById("main");
const all = document.getElementById("all");
const active = document.getElementById("active");
const inactive = document.getElementById("inactive");

const content = [
    {
        icon:"toggle-right.png",
        name:"DevLens",
        description:"Quickly inspect page layouts and visualize element boundaries.",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:true
    },
    {
        icon:"toggle-right.png",
        name:"StyleSpy",
        description:"Quickly inspect page layouts and visualize element boundaries.",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:true
    },
    {
        icon:"toggle-right.png",
        name:"JSONWizard",
        description:"Formats, validates and prettifies JSON responses in-browser",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:true
    },
    {
        icon:"toggle-left.png",
        name:"SpeedBoast",
        description:"Optimizes browser resource usage to accelerate page loading",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:false
    },
    {
        icon:"toggle-right.png",
        name:"TabMaster",
        description:"Organizes browser tabs into groups and sessions",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:true
    },
    {
        icon:"toggle-left.png",
        name:"ViewportBuddy",
        description:"Simulates various screen resolutions directly within the browser.",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:false
    },
    {
        icon:"toggle-right.png",
        name:"Markup Notes",
        description:"Enables annotation and notes directly onto webpages for collaborative debugging.",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:true
    },
    {
        icon:"toggle-left.png",
        name:"GridGuides",
        description:"Overlay customizable grids and alignment guides on any webpage.",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:false
    },
    {
        icon:"toggle-right.png",
        name:"Palette Picker",
        description:"Instant extracts color palettes from any webpage.",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:true
    },
    {
        icon:"toggle-right.png",
        name:"LinkChecker",
        description:"Scan and highlights broken links on any page",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:true
    },
    {
        icon:"toggle-left.png",
        name:"DOM Snapshot",
        description:"Capture and export DOM structures quickly.",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:false
    },
    {
        icon:"toggle-right.png",//adding icon on an object
        name:"ConsolePlus",
        description:"Enhanced developer console with advanced filtering and logging.",
        button:{//adding a button on an object
            label:"Remove"
        },
        status:true
    }
];
// create a function to filter active extensions
function filterActive(extension){
    main.innerHTML = '';
    const activeExtensions = extension.filter((extensions)=>{
        return extensions.status === true;
    });

        //loop through the active
        activeExtensions.forEach(extension => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h1>${extension.name}</h1>
                <p>${extension.description}</p>
                <button>${extension.button}</button>
                <img src="${extension.icon}">
            `
            main.appendChild(div)
            //looping then map then in a div
        })
    
}

active.addEventListener("click",()=>{
    filterActive(content)
})

function filterInActive(extension){
    main.innerHTML = '';
    const activeExtensions = extension.filter((extensions)=>{
        return extensions.status === false;
    });

        //loop through the active
        activeExtensions.forEach(extension => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h1>${extension.name}</h1>
                <p>${extension.description}</p>
                <button>Remove</button>
                <img src="${extension.icon}">
            `
            main.appendChild(div)
            //looping then map then in a div
        })
    
}

inactive.addEventListener("click",()=>{
    filterInActive(content)
})

function filterAll(extension){
    main.innerHTML = '';
    const activeExtensions = extension.filter((extensions)=>{
        return extensions.status === false || true;
    });

        //loop through the active
        activeExtensions.forEach(extension => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h1>${extension.name}</h1>
                <p>${extension.description}</p>
                <button>Remove</button>
                <img src="${extension.icon}">
            `
            main.appendChild(div)
            //looping then map then in a div
        })
    
}

all.addEventListener("click",()=>{
    filterAll(content)
})