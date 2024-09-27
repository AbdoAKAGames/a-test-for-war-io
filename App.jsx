import { useState, useRef } from 'react';
import { SignupPage } from './components/signupPage';
// import { Coon } from './components/coon';
import { Game } from './components/game';
import { Loading } from './components/loading';
import { Gameplay } from './components/gameplay';
import { createClient } from "@supabase/supabase-js";
import { useEffect } from 'react';

export const supabase = createClient("https://qmroefbypkdlpdsjbqdm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtcm9lZmJ5cGtkbHBkc2picWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMTY3MDEsImV4cCI6MjA0MjY5MjcwMX0.Phn-HAKKxBgZX6KGsFiw--TuSiMuP7XEyH2pXsEV6Ws");

export default function App() {
  
    
  const [signedUp, setSignedUp] = useState(false);
  const [signupForm, setSignupForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isShop, setIsShop] = useState(false);
  const [gameplay, setGameplay] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const notes = useRef(null);
  const note = useRef(null);
  const content = useRef(null);
  const profileContent = useRef(null);
  const gearContent = useRef(null);
  const playContent = useRef(null);
  const clansContent = useRef(null);
  const eventsContent = useRef(null);
  const messagesContent = useRef(null);
  const settingsContent = useRef(null);
  const creditsText = useRef(null);

    function showSignup(){
      setSignupForm(true);
    }

    function hideSignupForm(){
      setSignupForm(false);
    }

    function signUp(){
      const nameValue = nameRef.current.value.trim();
      const emailValue = emailRef.current.value.trim();
      const passwordValue = passwordRef.current.value.trim();
      if (nameValue.length > 0
        && emailValue.length > 0
        && passwordValue.length > 0
        && emailValue.includes('@gmail.com')
      ) {
        setSignedUp(true);
        localStorage.setItem("signedUp", true);
        localStorage.setItem("name", nameValue);
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passwordValue);
        (async function signup() {
          const newUser = { id: crypto.randomUUID(), name: nameValue, email: emailValue, password: passwordValue }
          await supabase.from('user_info').insert([newUser]);
          localStorage.setItem('id', newUser.id);
        })()
      }
    }

    function checkSignedUp() {
      if (localStorage.getItem('name') && localStorage.getItem("email") && localStorage.getItem("password"))
        {
          setSignedUp(true)
        } else{
          setSignedUp(false);
        }
      }
      window.addEventListener("load", () => {
        checkSignedUp();
        setIsLoading(false);
        generateID();
      })

      function hideAllItems(showedItem){
        content.current.style.display = 'block';
        profileContent.current.style.display = 'none';
        gearContent.current.style.display = 'none';
        playContent.current.style.display = 'none';
        clansContent.current.style.display = 'none';
        creditsText.current.style.display = 'none';
        eventsContent.current.style.display = 'none';
        messagesContent.current.style.display = 'none';
        // settingsContent.current.style.display = 'none';
        showedItem.current.style.display = 'block';
      }

      function showProfile(){
        hideAllItems(profileContent);
        for (let index = 0; index < document.getElementsByClassName('left_sidebar_item').length; index++) {
          const element = document.getElementsByClassName('left_sidebar_item')[index];
          element.classList.remove('selected_item');
        }
      }
      function showGear(){
        hideAllItems(gearContent);
      }
      function showPlay(){
        hideAllItems(playContent);
        creditsText.current.style.display = 'block';
      }
      function showClans(){
        hideAllItems(clansContent);
      }
      function showEvents(){
        hideAllItems(eventsContent);
      }
      function showMessages(){
        hideAllItems(messagesContent);
      }
      function showSettings(){
        hideAllItems(settingsContent);
      }



      function generateID(){
        const ID = localStorage.getItem("ID")
        if (ID) return
        const newID = crypto.randomUUID();
        localStorage.setItem("ID", newID);
      }

      function setGear(){
        if (!localStorage.getItem("weapons")) {
          const weapons = [{
            melee: [
              {
                name: "Katana",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Katana.png?raw=true",
                rank: "legend",
                unlocked: true,
              },
            ],
            pistol: [
              {
                name: "Golden Gun",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/goldengun.png?raw=true",
                rank: "legend",
                unlocked: true,
              },
              {
                name: "Bretta",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Bretta.png?raw=true",
                rank: "rare",
                unlocked: true,
              },
            ],
            main: [
              {
                name: "AK47",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/AK47.png?raw=true",
                rank: "uncommon",
                unlocked: true,
              },
              {
                name: "M4",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/M4.png?raw=true",
                rank: "rare",
                unlocked: true,
              },
            ],
            explosives: [
              {
                name: "Frag Grenade",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Frag Grenade.png?raw=true",
                rank: "epic",
                unlocked: true,
              },
              {
                name: "Flash Grenade",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Flash Grenade.png?raw=true",
                rank: "epic",
                unlocked: true,
              },
            ],
            packs: [
              {
                name: "Ammo Pack",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Ammo Pack.png?raw=true",
                rank: "epic",
                unlocked: true,
              },
              {
                name: "Health Pack",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Health Pack.png?raw=true",
                rank: "epic",
                unlocked: true,
              },
            ],
            skins: [
              {
                name: "Flowers",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/flowers.png?raw=true",
                rank: "common",
                unlocked: true,
              },
            ],
            bodies: [
              {
                name: "white",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/white.png?raw=true",
                rank: "common",
                unlocked: true,
              },
            ],
            hands: [
              {
                name: "none",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/none.png?raw=true",
                rank: "common",
                unlocked: true,
              },
            ],
            emojis: [
              {
                name: "like",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/like emoji.png?raw=true",
                rank: "common",
                unlocked: true,
              },
            ]
          }];
          localStorage.setItem("weapons", JSON.stringify(weapons));
        }
      }

      const melee = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].melee : [
        {
            name: "Katana",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Katana.png?raw=true",
            rank: "legend",
            unlocked: true,
        },
    ]
    const pistol = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].pistol : [
        {
            name: "Golden Gun",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/goldengun.png?raw=true",
            rank: "legend",
            unlocked: true,
        },
        {
            name: "Bretta",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Bretta.png?raw=true",
            rank: "rare",
            unlocked: true,
        },
    ];
    const main = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].main : [
        {
            name: "AK47",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/AK47.png?raw=true",
            rank: "uncommon",
            unlocked: true,
        },
        {
            name: "M4",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/M4.png?raw=true",
            rank: "rare",
            unlocked: true,
        },
    ];
    const explosives = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].explosives : [
        {
            name: "Frag Grenade",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Frag Grenade.png?raw=true",
            rank: "epic",
            unlocked: true,
        },
        {
            name: "Flash Grenade",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Flash Grenade.png?raw=true",
            rank: "epic",
            unlocked: true,
        },
    ];
    const packs = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].packs : [
        {
            name: "Ammo Pack",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Ammo Pack.png?raw=true",
            rank: "epic",
            unlocked: true,
        },
        {
            name: "Health Pack",
            src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/Health Pack.png?raw=true",
            rank: "epic",
            unlocked: true,
        },
    ];
    const skins = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].skins : [
      {
          name: "Flowers",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/flowers.png?raw=true",
          rank: "common",
          unlocked: true,
      },
  ];
  const bodies = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].bodies : [
      {
          name: "white",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/white.png?raw=true",
          rank: "common",
          unlocked: true,
      },
  ];
  const hands = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].hands : [
      {
          name: "none",
          src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/none.png?raw=true",
          rank: "common",
          unlocked: true,
      },
  ];
  const emojis = localStorage.weapons ? JSON.parse(localStorage.getItem("weapons"))[0].emojis : [
    {
        name: "like",
        src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/like emoji.png?raw=true",
        rank: "common",
        unlocked: true,
    },
];
const perks = [
  {
      name: "DAP",
      src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
      rank: "none",
      unlocked: true,
  },
  {
      name: "DAP2",
      src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
      rank: "none",
      unlocked: true,
  },
  {
      name: "DAP3",
      src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
      rank: "none",
      unlocked: true,
  },
  {
      name: "DAP4",
      src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
      rank: "none",
      unlocked: true,
  },
]


      function saveGear(){
        if (!localStorage.getItem("weapon_1")) localStorage.setItem("weapon_1", JSON.stringify(melee[0]));
        if (!localStorage.getItem("weapon_2")) localStorage.setItem("weapon_2", JSON.stringify(pistol[0]));
        if (!localStorage.getItem("weapon_3")) localStorage.setItem("weapon_3", JSON.stringify(main[0]));
        if (!localStorage.getItem("weapon_4")) localStorage.setItem("weapon_4", JSON.stringify(explosives[0]));
        if (!localStorage.getItem("weapon_5")) localStorage.setItem("weapon_5", JSON.stringify(packs[0]));
        if (!localStorage.getItem("skin_img")) localStorage.setItem("skin_img", JSON.stringify(skins[0]));
        if (!localStorage.getItem("body_img")) localStorage.setItem("body_img", JSON.stringify(bodies[0]));
        if (!localStorage.getItem("hand_img")) localStorage.setItem("hand_img", JSON.stringify(hands[0]));
        if (!localStorage.getItem("emoji_1")) localStorage.setItem("emoji_1", JSON.stringify(emojis[0]));
        if (!localStorage.getItem("emoji_2")) localStorage.setItem("emoji_2", JSON.stringify(emojis[0]));
        if (!localStorage.getItem("emoji_3")) localStorage.setItem("emoji_3", JSON.stringify(emojis[0]));
        if (!localStorage.getItem("emoji_4")) localStorage.setItem("emoji_4", JSON.stringify(emojis[0]));
        if (!localStorage.getItem("perk_1")) localStorage.setItem("perk_1", JSON.stringify(perks[0]));
        if (!localStorage.getItem("perk_2")) localStorage.setItem("perk_2", JSON.stringify(perks[0]));
        if (!localStorage.getItem("perk_3")) localStorage.setItem("perk_3", JSON.stringify(perks[0]));
        setGear();
      }


      function forbiddenUsingTwoPerks() {
        perks[0] = 
            {
                name: "DAP",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
                rank: "none",
                unlockLevel: 0,
                unlocked: true,
            }
        perks[1] = 
            {
                name: "abc",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
                rank: "none",
                unlockLevel: 0,
                unlocked: true,
            }
        perks[2] = 
            {
                name: "def",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
                rank: "none",
                unlockLevel: 0,
                unlocked: true,
            }
        perks[3] = 
            {
                name: "ghi",
                src: "https://github.com/AbdoAKAGames/war-io/blob/master/src/assets/dap.png?raw=true",
                rank: "none",
                unlockLevel: 0,
                unlocked: true,
            }
            if (localStorage.perk_1 && localStorage.perk_2 && localStorage.perk_3) {
                perks.forEach((perk, index) => {
                    if (perk.name === JSON.parse(localStorage.getItem("perk_1")).name) {
                        perks.splice(index, 1)
                    }
                })
                perks.forEach((perk, index) => {
                    if (perk.name === JSON.parse(localStorage.getItem("perk_2")).name) {
                        perks.splice(index, 1)
                    }
                })
                perks.forEach((perk, index) => {
                    if (perk.name === JSON.parse(localStorage.getItem("perk_3")).name) {
                        perks.splice(index, 1)
                    }
                })
            }
          }

          async function setCurrency() {
            const { data } = await supabase.from('currency').select().eq('id', localStorage.id);
            console.log(data);
            
            if (data.length === 0) {
              const { data, error } = await supabase.from('currency').insert([{ id: localStorage.id, gems: 250, coins: 300 }]);
              // console.log((await supabase.from('currency').select().eq('id', localStorage.id)).error.message);
            }
          }

          useEffect(() => {
            setCurrency();
          }, [])
    
  return (
    <>
    {isLoading && <Loading />}
      {!isLoading && <>
        {!gameplay && <>
        {!signedUp && <SignupPage
        signupForm={signupForm}
        showSignup={showSignup}
        hideSignupForm={hideSignupForm}
        signUp={signUp}
        nameRef={nameRef}
        emailRef={emailRef}
        passwordRef={passwordRef} />
        }
        {signedUp && 
        <Game
        content={content}
        showProfile={showProfile}
        showGear={showGear}
        showClans={showClans}
        showPlay={showPlay}
        showEvents={showEvents}
        showMessages={showMessages}
        showSettings={showSettings}
        profileContent={profileContent}
        gearContent={gearContent} 
        playContent={playContent} 
        clansContent={clansContent}
        eventsContent={eventsContent}
        messagesContent={messagesContent}
        settingsContent={settingsContent}
        melee={melee}
        pistol={pistol}
        main={main}
        explosives={explosives}
        packs={packs}
        saveGear={saveGear}
        skins={skins}
        bodies={bodies}
        hands={hands}
        emojis={emojis}
        perks={perks}
        forbiddenUsingTwoPerks={forbiddenUsingTwoPerks}
        note={note}
        notes={notes}
        creditsText={creditsText}
        isShop={isShop}
        setIsShop={setIsShop}
        gameplay={gameplay}
        setGameplay={setGameplay}
        id={localStorage.id}
        />
        }
        </>
        }
        {
        gameplay &&
        <Gameplay />
        }
      </>
      }
    </>
  )
}

