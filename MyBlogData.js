const express = require('express');
const blog = express();
const port = 8080;

const home2 =   `
<style>
body{
    margin: 0 auto;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.72);
    color: white;
}
div{
    margin: 0 auto;
    padding: 50px;
    padding-bottom: 20px;
    
}
h1{
    background-color: rgba(255, 0, 0, 0.289);
    width: 1200px;
    height: 100px;
    color: rgba(255, 247, 3, 0.7);
    display: flex;
    justify-content:space-around;
    align-items: center;
}
h2, h4{
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.796);
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
p{
    margin: 0 auto;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    text-justify: distribute;
    display: flex;
    justify-content: space-around;
}
a{
    margin: 0 auto;
    padding: 10px;
    color: silver;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: rgba(105, 90, 205, 0.576);
    width: 100px;
    height: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
h3{
    background-color: rgba(255, 0, 0, 0.289);
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.796);
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
</style>
<body>
<div>
    <h1>Welcome to Local Blogs!</h1>
    <h4> "add your own stories" </h4>
    <br>
    <p>_______________________________________________________________________________________________________</p>
    <br>
    <br>
    <h2> Blog 1 </h2>
    <p>Boy Scout Lane is in the Town of Linwood, Portage County, Wisconsin. It is located west of the Wisconsin River Golf Club, on West River Drive (West), and is situated between Cemetery Road and Little Chicago Road. It is unpaved and about 2,500 feet (760 m) long.[2] The road was named Boy Scout Lane because the land that it is located near was once owned by the Boy Scouts of America, who planned to use the land to build a Scout camp.[3] Although the camp was never constructed and the land remains woodland, the name was still used.</p>
    <p>According to a local urban legend, the road is named for a troop of Boy Scouts who were killed while on a camping trip in the 1950s or 1960s. In some variations the murderer is the troop's Scoutmaster. In others it is their bus driver.[4] In other versions of the legend, a small group of Scouts leave their camp during the night and accidentally drop their lantern, resulting in a forest fire that kills the entire troop.[4]</p>
    <p>Other variations of the story exist including one in which the Scouts are killed after their bus crashes or accidentally catches fire. There is also a version in which the Scouts vanish without explanation and are never found. In some versions of the legend, two Boy Scouts escaped the fate of the rest of the troop and tried to find help, only to become lost in the woods where they die of starvation and/or exposure. In most variations of the legend it is said that the dead Scouts haunt the forest where they died and can be heard hiking through the undergrowth, or their lights can be seen at night as they seek help or their fellow Scouts.[4]</p>
    <p>Stories circulated in "haunted travel guides"[4] include visitors reporting a strong sense of foreboding or "being watched", the sound of footsteps or breaking branches coming from multiple directions, red or white lights sometimes described as resembling swinging lanterns or flashlight beams, ghostly buses or figures, and "childlike hand prints" on cars stopped in or driven through the area.</p>
    <a href="/next?next=page2">continue to page 2...</a>
</div>
<div>
    <h3> Add a BLOG? <a href='/form'> Add Blog </a></h3><br>
    
</div>

</body>
                `
const home = 
            `
            <style>
                body{
                    margin: 0 auto;
                    padding: 10px;
                    background-color: rgba(0, 0, 0, 0.72);
                    color: white;
                }
                div{
                    margin: 0 auto;
                    padding: 50px;
                    padding-bottom: 20px;
                    
                }
                h1{
                    background-color: rgba(255, 0, 0, 0.289);
                    width: 1200px;
                    height: 100px;
                    color: rgba(255, 247, 3, 0.7);
                    display: flex;
                    justify-content:space-around;
                    align-items: center;
                }
                h2{
                    margin: 0 auto;
                    color: rgba(255, 255, 255, 0.796);
                    font-family: 'Courier New', Courier, monospace;
                    display: flex;
                    justify-content:space-around;
                    align-items: center;
                }
                p{
                    margin: 0 auto;
                    font-family: 'Courier New', Courier, monospace;
                    display: flex;
                    text-justify: distribute;
                    display: flex;
                    justify-content: space-around;
                }
                a{
                    margin: 0 auto;
                    padding: 10px;
                    color: silver;
                    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                    background-color: rgba(105, 90, 205, 0.576);
                    width: 100px;
                    height: 10px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                h3{
                    background-color: rgba(255, 0, 0, 0.289);
                    width: 1200px;
                    height: 60px;
                    margin: 0 auto;
                    color: rgba(255, 255, 255, 0.796);
                    font-family: 'Courier New', Courier, monospace;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            </style>
            <body>
                <div>
                    <h1>Welcome to My_Blog!</h1>
                    <h2>Starter pack to being Awesome! -_< </h2>
                    <br>
                    <p>______________________________________________________________________________________________</p>
                    <br>
                    <h2>Killer Playlists</h2>
                    <p>Top 10 Conutry Hits!</p>
                    <a href='/playlist?playlist=1'> View Playlist </a>
                    <br>
                    <p>Top 10 Khalid Hits!</p>
                    <a href='/playlist?playlist=2'> View Playlist </a>
                    <br>
                    <p>Top 10 AC/DC Hits!</p>
                    <a href='/playlist?playlist=3'> View Playlist </a>
                    <br>
                    <h2>Spook your BRAIN! :P</h2>
                    <p> Thirteen Ghosts </p>
                    <a href='/ghost?ghost=1'> Read </a>
                    <p> Boy Scout Lane </p>
                    <a href='/ghost?ghost=2'> Read </a>
                    <p> Ghost Whisperer </p>
                    <a href='/ghost?ghost=3'> Read </a>
        
                </div>
                <div>
                    <h3> Need Help? Click on the link to submit your query: <a href='/form'> Help Desk </a></h3><br>
                    
                </div>
                
            </body>
            `
const musicPlaylist1 = 
            `
            <style>
            body{
                margin: 0 auto;
                padding: 10px;
                background-color: rgba(0, 0, 0, 0.72);
                color: white;
            }
            div{
                margin: 0 auto;
                padding: 50px;
                padding-bottom: 20px;
            }
            h1{
                background-color: rgba(255, 0, 0, 0.289);
                width: 1200px;
                height: 100px;
                color: rgba(255, 247, 3, 0.7);
                display: flex;
                justify-content:space-around;
                align-items: center;
            }
            h2{
                color: rgba(255, 255, 255, 0.796);
                font-family: 'Courier New', Courier, monospace;
            }
            p{
                font-family: 'Courier New', Courier, monospace;
                display: flex;
                text-justify: distribute;
            }
            a{
                padding: 10px;
                color: silver;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                background-color: rgba(105, 90, 205, 0.576);
                width: 100px;
                height: 30px;
                display: flex;
                justify-content: space-around;
            }
        </style>
        <body>
            <div>
                <h1>
                    My Playist!
                </h1>
                <h2> My Country Music </h2>
                <li>1. “I Hope” – Gabby Barrett</li>
                <li>2. “Nobody But You” Blake Shelton & Gwen Stefani</li>
                <li>3. “Chasin’ You” – Morgan Wallen</li>
                <li>4. “More Hearts Than Mine” – Ingrid Andress</li>
                <li>5. “Catch” – Brett Young</li>
                <li>6. “Beer Can’t Fix” – Thomas Rhett feat. Jon Pardi</li>
                <li>7. “Does to Me” – Luke Combs feat. Eric Church</li>
                <li>8. ” After a Few” – Travis Denning</li>
                <li>9. “I Hope You’re Happy Now” – Carly Pearce & Lee Brice</li>
                <li>10. “Homemade” – Jake Owen</li>
                <br>
                <p>Favourite: “I Hope” – Gabby Barrett</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qcCH6JpcK5w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br>
                <button>Like</button>
                <br>
                <br>
                <a href='/home'> Go back HOME </a>
            </div>
        </body> 
        <script>
                document.querySelector('button').addEventListener('click', (event)=>{
                event.target.textContent = "Liked"
                })
        </script>
            `
const musicPlaylist2 = 
            `
            <style>
            body{
                margin: 0 auto;
                padding: 10px;
                background-color: rgba(0, 0, 0, 0.72);
                color: white;
            }
            div{
                margin: 0 auto;
                padding: 50px;
                padding-bottom: 20px;
            }
            h1{
                background-color: rgba(255, 0, 0, 0.289);
                width: 1200px;
                height: 100px;
                color: rgba(255, 247, 3, 0.7);
                display: flex;
                justify-content:space-around;
                align-items: center;
            }
            h2{
                color: rgba(255, 255, 255, 0.796);
                font-family: 'Courier New', Courier, monospace;
            }
            p{
                font-family: 'Courier New', Courier, monospace;
                display: flex;
                text-justify: distribute;
            }
            a{
                padding: 10px;
                color: silver;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                background-color: rgba(105, 90, 205, 0.576);
                width: 100px;
                height: 30px;
                display: flex;
                justify-content: space-around;
                
            }
        </style>
        <body>
            <div>
                <h1>
                    My Playist!
                </h1>
                <h2> Khalid Playlist</h2>
                <li>1. Better (2018)</li>
                <li>2. Don't Pretend (2019)</li>
                <li>3. Eleven (2020)</li>
                <li>4. Free Spirit (2019)</li>
                <li>5. Heaven (2019)</li>
                <li>6. Hundred (2019)</li>
                <li>7. Know Your Worth (2020)</li>
                <li>8. Location (2016)</li>
                <li>9. My Bad (2019)</li>
                <li>10. OTW (2018)</li>
                <br>
                <p>Favourite: Know Your Worth (2020)</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aEDULPGIwcg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br>
                <button>Like</button>
                <br>
                <br>
                <a href='/home'> Go back HOME </a>
            </div>
        </body> 
        <script>
        document.querySelector('button').addEventListener('click', (event)=>{
        event.target.textContent = "Liked"
        })
        </script>
            `
const musicPlaylist3 = 
            `
            <style>
            body{
                margin: 0 auto;
                padding: 10px;
                background-color: rgba(0, 0, 0, 0.72);
                color: white;
            }
            div{
                margin: 0 auto;
                padding: 50px;
                padding-bottom: 20px;
            }
            h1{
                background-color: rgba(255, 0, 0, 0.289);
                width: 1200px;
                height: 100px;
                color: rgba(255, 247, 3, 0.7);
                display: flex;
                justify-content:space-around;
                align-items: center;
            }
            h2{
                color: rgba(255, 255, 255, 0.796);
                font-family: 'Courier New', Courier, monospace;
            }
            p{
                font-family: 'Courier New', Courier, monospace;
                display: flex;
                text-justify: distribute;
            }
            a{
                padding: 10px;
                color: silver;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                background-color: rgba(105, 90, 205, 0.576);
                width: 100px;
                height: 30px;
                display: flex;
                justify-content: space-around;
            }
        </style>
        <body>
            <div>
                <h1>
                    My Playist!
                </h1>
                <h2>All time AC/DC Playlist</h2>
                <li>1. Back In Black (1980)</li>
                <li>2. Highway To Hell (1979)</li>
                <li>3. You Shook Me All Night Long (1980)</li>
                <li>4. Dirty Deeds Done Dirt Cheap (1976)</li>
                <li>5. Thunderstruck (1990)</li>
                <li>6. Hells Bells (1980)</li>
                <li>7. Whole Lotta Rosie (1977)</li>
                <li>8. T.N.T. (1975)</li>
                <li>9. Jailbreak (1976)</li>
                <li>10. It’s a Long Way to the Top (If You Wanna Rock ‘n’ Roll) (1975)</li>
                <p>Favourite: Highway To Hell (1979)</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4hhlQU0zDpA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br>
                <button>Like</button>
                <br>
                <br>
                <a href='/home'> Go back HOME </a>
            </div>
        </body>
        <script>
        document.querySelector('button').addEventListener('click', (event)=>{
        event.target.textContent = "Liked"
        })
        </script> 
            `
const ghostStory1 = 
            `
            <style>
    body{
        margin: 0 auto;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.72);
        color: white;
    }
    div{
        margin: 0 auto;
        padding: 50px;
        padding-bottom: 20px;
    }
    h1{
        background-color: rgba(255, 0, 0, 0.289);
        width: 1200px;
        height: 100px;
        color: rgba(255, 247, 3, 0.7);
        display: flex;
        justify-content:space-around;
        align-items: center;
    }
    h2{
        color: rgba(255, 255, 255, 0.796);
        font-family: 'Courier New', Courier, monospace;
    }
    p{
        font-family: 'Courier New', Courier, monospace;
        display: flex;
        text-justify: distribute;
    }
    a{
        margin: 0 auto;
        padding: 10px;
        color: silver;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-color: rgba(105, 90, 205, 0.576);
        width: 100px;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
<body>
        <h1>Spook your brains out</h1>
        <h2>Thirteen Ghosts</h2>
            <p>Ghost hunter Cyrus Kriticos and his psychic assistant Dennis Rafkin lead a team on a mission to capture a spirit called the Juggernaut. Several men, including Cyrus, are killed while the team is able to catch the ghost. Cyrus's nephew Arthur, a widower, is informed by Cyrus's estate lawyer, Ben Moss, that he has inherited Cyrus' mansion. Financially insecure, Arthur decides to move there with his two children, Kathy and Bobby, and their nanny, Maggie.</p>

            <p>Dennis meets the family as they tour the mansion. The residence is made entirely of glass sheets inscribed with Latin phrases, which Dennis recognizes as barrier spells. He discovers that the twelve angry ghosts he and Cyrus captured are imprisoned in the house, held captive by the spells. As he warns Arthur, Moss unwittingly triggers a mechanism that seals the house and releases the ghosts. He dies when a set of sliding doors cut him in half. Bobby sees several of the ghosts, including the Withered Lover - his mother Jean, who had died of injuries sustained in a house fire. He is knocked unconscious and dragged away.</p>

            <p>Dennis uses a pair of spectral glasses that allow the wearer to see the supernatural realm to avoid the ghosts. The Jackal, one of the most dangerous of the twelve, attacks Kathy and Arthur but they are saved by Kalina Oretzia, a spirit liberator who is attempting to free the ghosts. Kathy disappears, and the four adults gather in the library, where Arthur learns that Jean's ghost is also in the house. Kalina explains that the house is a machine, powered by the captive ghosts, that allows its user to see the past, present, and future. The only way to shut it down is through the creation of a thirteenth ghost from a sacrifice of love. Arthur realizes that he must become that ghost to save his children.</p>

            <p>Armed with the spectral glasses, Arthur and Dennis enter the basement to find the children. Dennis barricades Arthur behind glass to save him and allows the Hammer and the Juggernaut to beat Dennis to death. It is revealed that Cyrus faked his death to lure Arthur to the house; Kalina is his partner. Cyrus has orchestrated the abduction of Kathy and Bobby so that Arthur will become the thirteenth ghost, which will not stop the machine as Kalina had claimed, but trigger its activation. Cyrus kills Kalina and summons the ghosts to activate the machine.</p>

            <p>In the main hall, Arthur witnesses all twelve ghosts orbiting a clockwork device of rotating metal rings, with his children at the center. He fights Cyrus while Maggie disrupts the machine's controls, releasing the ghosts from its power and causing the machine to go haywire. The ghosts hurl Cyrus into the moving rings, slicing him to pieces. With the encouragement of Dennis' ghost, Arthur jumps into the machine and saves his children. The walls of the house shatter as the malfunctioning machine rips itself apart, freeing the ghosts. Jean's ghost tells them she loves them before she disappears. Maggie angrily declares she quits her nanny job, and the family peacefully leave the house.</p>
            <br>
            <button>Like</button>
            <br>
            <br>
            <a href='/home'> Go back HOME </a>
            </div>
</body>
<script>
        document.querySelector('button').addEventListener('click', (event)=>{
        event.target.textContent = "Liked"
        })
</script> 
            `

const ghostStory2 = 
            `
            <style>
    body{
        margin: 0 auto;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.72);
        color: white;
    }
    div{
        margin: 0 auto;
        padding: 50px;
        padding-bottom: 20px;
    }
    h1{
        background-color: rgba(255, 0, 0, 0.289);
        width: 1200px;
        height: 100px;
        color: rgba(255, 247, 3, 0.7);
        display: flex;
        justify-content:space-around;
        align-items: center;
    }
    h2{
        color: rgba(255, 255, 255, 0.796);
        font-family: 'Courier New', Courier, monospace;
    }
    p{
        font-family: 'Courier New', Courier, monospace;
        display: flex;
        text-justify: distribute;
    }
    a{
        margin: 0 auto;
        padding: 10px;
        color: silver;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-color: rgba(105, 90, 205, 0.576);
        width: 100px;
        height: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
<body>
    <div>
        <h1>Spook your brains out</h1>
        <h2>Boy Scout Lane</h2>
        <p>Boy Scout Lane is in the Town of Linwood, Portage County, Wisconsin. It is located west of the Wisconsin River Golf Club, on West River Drive (West), and is situated between Cemetery Road and Little Chicago Road. It is unpaved and about 2,500 feet (760 m) long.[2] The road was named Boy Scout Lane because the land that it is located near was once owned by the Boy Scouts of America, who planned to use the land to build a Scout camp.[3] Although the camp was never constructed and the land remains woodland, the name was still used.</p>
        <p>According to a local urban legend, the road is named for a troop of Boy Scouts who were killed while on a camping trip in the 1950s or 1960s. In some variations the murderer is the troop's Scoutmaster. In others it is their bus driver.[4] In other versions of the legend, a small group of Scouts leave their camp during the night and accidentally drop their lantern, resulting in a forest fire that kills the entire troop.[4]</p>
        <p>Other variations of the story exist including one in which the Scouts are killed after their bus crashes or accidentally catches fire. There is also a version in which the Scouts vanish without explanation and are never found. In some versions of the legend, two Boy Scouts escaped the fate of the rest of the troop and tried to find help, only to become lost in the woods where they die of starvation and/or exposure. In most variations of the legend it is said that the dead Scouts haunt the forest where they died and can be heard hiking through the undergrowth, or their lights can be seen at night as they seek help or their fellow Scouts.[4]</p>
        <p>Stories circulated in "haunted travel guides"[4] include visitors reporting a strong sense of foreboding or "being watched", the sound of footsteps or breaking branches coming from multiple directions, red or white lights sometimes described as resembling swinging lanterns or flashlight beams, ghostly buses or figures, and "childlike hand prints" on cars stopped in or driven through the area.</p>
        <br>
        <button>Like</button>
        <br>
        <br>
        <a href='/home'> Go back HOME </a>
    </div>
</body>
<script>
        document.querySelector('button').addEventListener('click', (event)=>{
        event.target.textContent = "Liked"
        })
</script> 
            `

const ghostStory3 = 
            `
            <style>
    body{
        margin: 0 auto;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.72);
        color: white;
    }
    div{
        margin: 0 auto;
        padding: 50px;
        padding-bottom: 20px;
    }
    h1{
        background-color: rgba(255, 0, 0, 0.289);
        width: 1200px;
        height: 100px;
        color: rgba(255, 247, 3, 0.7);
        display: flex;
        justify-content:space-around;
        align-items: center;
    }
    h2{
        color: rgba(255, 255, 255, 0.796);
        font-family: 'Courier New', Courier, monospace;
    }
    p{
        font-family: 'Courier New', Courier, monospace;
        display: flex;
        text-justify: distribute;
    }
    a{
        margin: 0 auto;
        padding: 10px;
        color: silver;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-color: rgba(105, 90, 205, 0.576);
        width: 100px;
        height: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
<body>
    <div>
        <h1>Spook your brains out</h1>
        <h2> Ghost Whisperer </h2>
        <p>Melinda meets Eli James (Jamie Kennedy) after a fire at Rockland University who, after his own near-death experience, develops the ability to hear ghosts. Melinda says goodbye to her close friend Rick Payne, who leaves Grandview on a research trip for the university. In this season, Jim is shot and killed. He does not "cross over" because he does not want to leave Melinda, and his spirit later enters the body of a man named Sam Lucas, who died in an unrelated accident in Grandview and crossed over. When Jim/Sam regains consciousness, he has no memory of being Jim. Melinda works to get him to remember his past life and her, and succeeds after much difficulty and skepticism on the part of her friends. They soon discover that Melinda is pregnant and that the date of conception was right before Jim died.</p>
        <p>At the end of the season, Ned and Eli find the Book of Changes, a book written by the Watchers (a benevolent group of ghosts who keep watch over the living). The book tells them of past and future prominent dates, such as Andrea and Jim's deaths. One date is listed as September 25, 2009; Melinda's due date. Melinda learns from a Watcher named Carl that her child is destined to not only inherit her gift, but be far more powerful than her. Melinda and Jim decide to remarry and have a small ceremony on a snowy night, on the street where they first met.</p>
        <br>
        <button>Like</button>
        <br>
        <br>
        <a href='/home'> Go back HOME </a>
    </div>
</body>
<script>
        document.querySelector('button').addEventListener('click', (event)=>{
        event.target.textContent = "Liked"
        })
</script>
            `

const form = `
                <style>
                body{
                    margin: 0 auto;
                    border: 50%;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.72);
                }
                form{
                    margin: 0 auto;
                    background-color: rgba(0, 255, 255, 0.193);
                }
                </style>
                <body>
                <form action="/filledForm" method="post">
                    <fieldset>
                        <legend>Help Desk</legend>
                        <lu>
                            <li>
                                <label> NAME: </label><br>
                                <input type="text" id="name" name="name" value="Enter name here"><br>
                            </li>
                            <li>
                                <label> E-mail: </label><br>
                                <input type="email" id="email" name="user_email"><br>
                            </li>
                            <li>
                                <label> QUERY: </label><br>
                                <textarea rows="10" cols="70" id="message" name="query_message"></textarea>
                            </li>
                        </lu>
                        <div>
                            <label for="cheese"> Do you like cheese? </label>
                            <input type="checkbox" name="cheese" id="cheese"><br>
                        </div>
                        <div>
                            <button type="submit" id="msg_btn"> SEND MESSAGE </button>
                        </div>
                    </fieldset>

                </form>
                </body>
            `
const form2 =   `
                <style>
                body{
                    margin: 0 auto;
                    border: 50%;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.72);
                }
                form{
                    margin: 0 auto;
                    background-color: rgba(0, 255, 255, 0.193);
                    
                }
                fieldset{
                    padding: 40px;
                }
                input{
                    height: 30px;
                    width: 250px;
                }
                button{
                    height: 30px;
                    width: 200px;
                }
                </style>
                <body>
                <form action="/filledForm" method="post">
                    <fieldset>
                        <legend>#Upload BLOG :</legend>
                        <lu>
                            <li>
                                <label> Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input class="tabbed" type="text" id="name" name="name" placeholder="Enter name..."><br>
                            </li>
                            <br>
                            <li>
                                <label> E-mail: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="email" id="email" name="user_email" placeholder="email@email.com"><br>
                            </li>
                            <br>
                            <li>
                                <label>Blog tittle:</label>&nbsp;
                                <input type="text" id="title" name="tittle" placeholder="Enter blog tittle..."><br>
                                <br>
                            </li>
                            <br>
                            <li>
                                <label> Compose Blog </label><br>
                                <br>
                                <textarea rows="15" cols="70" id="message" name="user_blog"></textarea>
                            </li>
                        </lu>
                        <div>
                            <label for="cheese">Remember password </label><input type="checkbox" name="cheese" id="cheese"><br>
                        </div>
                        <br>
                        <div>
                            <button type="submit" id="msg_btn"> SUBMIT BLOG </button>
                        </div>
                    </fieldset>

                </form>     
                </body>
                `
            
module.exports = {
    homepage2: home2,
    homepage: home,
    playlist01: musicPlaylist1,
    playlist02: musicPlaylist2,
    playlist03: musicPlaylist3,
    story1: ghostStory1,
    story2: ghostStory2,
    story3: ghostStory3,
    queryForm: form,
    blogform: form2
}
