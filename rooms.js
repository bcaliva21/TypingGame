export { commands, rooms, inventory };

var inventory = ['compass'];
var commands = ['go', 'look', 'inspect', 'use', 'inventory', 'lie-on', 'sleep-on', 'pickup', 'talk'];

var rooms = {
  invalid: {
    description: 'You entered an invalid move. Check your compass and try again',
  },
  help: {
    description: 'Help your character to remember who they are. Luckily you have a trusty compass! You can navigate by typing <b>go north, go east, go south, or go west</b>. Read and make sure to pay attention to <b>clues</b> left in bold type. Experiment with typing in simple actions when you see clues in the script. Type <b>help</b> to see available commands. Good luck, have fun... and don\'t die',
    },
  start: {
    description: 'You are in what appears to be a small living room. The decorations are posh and expensive. There\'s a small cupboard next to you, but it\'s locked. There\'s a window and it appears that you are on the second floor of this building. You see a door to the <b>north</b>,a <b>window</b> to the east, a bad <b>painting</b> of a cat to the south, and large double doors to the <b>west</b>.',
    directions: {
      north: 'office21',
      west: 'suite2a',
    },
    actions: {
      'inspect painting': 'Why would someone hang such a monstrousity on the wall? . . . ! <br> You find a safe behind the painting! Luck You! You see a penny!',
      'pickup penny': 'penny added to inventory',
      'look out window': 'You see a large clearing and a dirt road that goes straight south. It looks very secluded as the grass goes on and on without another house in sight. The view is gorgeous, but this view of natures-nothingness gives you a slightly uneasy feeling.'
    }
  },
  office21: {
    description: 'You find an office that is in complete disarray. Looks like a struggle went on here. There is an overturned <b>desk</b>, a <b>window</b> facing east, and a door to the <b>south</b>.',
    directions: {
      south: 'start',
    },
    actions: {
      'inspect desk':'You rummage through the desk in the office. You find a <b>knife</b> and a <b>notepad</b> with something scibbled on top. There appears to be blood drops on it.',
      'inspect notepad' : 'He\'s stal~~', 
      'pickup knife': '~You acquired a pocket knife~'
    },
  },
  suite2a: {
    description: 'A large suite. Nothing is out of place here. The massive double king-sized bed to the south is perfectly made. North there is a large window from floor to ceiling. Nothing much of interest here. You find a massive window to the <b>north</b>, double doors to the <b>east</b>, a bathroom to the <b>south</b>, and double doors to the <b>west</b>.',
    directions: {
      north: 'suite2b',
      east: 'start',
      south: 'bathroom21',
      west: 'balcony21',
    },
    actions: {
      'lie-on bed': 'You lay down, but can\'t shake your uncomfortable feeling... perhaps you shouldn\'t sleep right now.',
      'sleep-on bed': 'Eyes closed you toss and turn... an image of a man with a moustache following you jarrs you awake... you get the feeling you are being watched. The bed sheets are a mess now.',
    },
  },
  bathroom21: {
    description: 'This bathroom is made for a king. Marble slabs on the countertops, gold faucets, and even a gold toilet. Strangely the water is running, looks like there is a stain on the nice marble countertop, you can\'t make out the substance. The mirror to the south is cracked, such a pity for such a nice bathroom. You find a door to the <b>north</b>, a shower to the east, a mirror to the south, and a gold toilet to the west.',
    directions: {
      north:'suite2a',
    },
    actions: {
      'use toilet': 'sitting on a toilet... sitting on a toilet... sitting on toilet... and flush',
      'look in mirror': 'Your hair is greesy, you have giant bags under your eyes, your vision is pulsing, and worst of all you don\'t recognize yourself... yet, this all feels familiar somehow.',
      'use shower': 'ahhh... this makes you feel slightly better. Just as you are feeling comfortable you promptly stop. You get the feeling you are being watched.',
    }
  },
  suite2b: {
    description: 'An expensive, albeit ugly, red chinese couch with yellow embroidered dragons sits looking towards the window. A beautiful in ground pool aggresively reflects the sunlight onto your face. There are multiple things floating in the pool, but you can\'t make out what they are. You see someone tending a garden beyond the pool. There\'s also a moderately sized building beyond it further north. The views exquisite, but from the looks of it this estate is secluded. The views remind you you have no idea where you are or what you are doing here. You find a massive window to the <b>north</b>, a <b>bookshelf</b> to the east, the center of the suite to the <b>south</b>, and a <b>closet</b> to the west.',
    directions: {
      south: 'suite2a',
    },
    actions: {
      'wave': 'Attempting to get the attention of the man in the garden you furiously thrash your arms through the air. He doesn\'t see you... or he pretends he doesn\'t',
      'lie-on couch': 'It\'s definitely ugly and not your style... but it sure is comfy. You rack your brain trying to remember your name... or if you have any family. The beautiful views before your eyes keep distracting your thoughts. You feel uneasy again, like there are eyes following your every move.',
      'sleep-on couch': 'You lie down on the couch. So close to the fabric you notice what appears to be blood... the red color disguises it well, you feel uneasy and immediately stand up. You get the feeling you are being watched.',
    },
  },
  balcony21: {
    description: 'You are on a balcony that over looks what appears to be the main living room in the house. The decorations are gaudy; clear diamond chandeliers hang from the ceiling, silk gold drapes hang from the frames of every window, and the floor is a pristine opaque white marble. You find a staircase to the <b>north</b>, a master suite to the <b>east</b>, a small storage closet to the <b>south</b>, and the view of the <b>living room</b> to the west.',
    directions: {
      north: 'staircase21',
      east: 'suite2a',
      south: 'storage21',
    },
    actions: {},
  },
  storage21: {
    description: 'A neatly organized storage closet that seems to double as a living quarters as you see a small <b>bed</b>. It looks like someone lives here. There\'s an alarm clock, a small <b>cupboard</b>, and a mini retro <b>tv</b> that looks likes something an old man would use. You see a balcony to the <b>north</b>.',
    directions: {
      north: 'balcony21'
    },
    actions: {
      'lie-on bed': 'You lay down, but can\'t shake your uncomfortable feeling... the musty smell that clings to the bed sheets doesn\'t help. You wouldn\'t like it if a stranger lied on your bed, maybe you shouldn\'t lie on theres.',
      'sleep-on bed': 'Eyes closed you toss and turn... The smell of sweaty onions slip into your unconscious. You dream of being a fry cook.... You wake up and the bed sheets are a mess. You feel guilty knowing you slept in someone\'s bed so you make the sheets. You feel eyes on you, maybe it\'s best to keep moving.',
      'use tv': 'You flip on the tv. Static. . . You play with the antenna to no avail. You turn it off.',
      'inspect cupboard': 'You find someones clothes. Much too big to be yours. You find a few photos of what look like family members. They don\'t look like you. hmmm... maybe this person can help you.'
    },
  },
  staircase21: {
    description: 'A fine piece of art this staircase is. The handrails begin with a miniature column with oranate designs on all four sides. The tiny columns that support the handrail are oranate figurines of soilders clad in armor and are modeled in such a way they look like they are holding up the handrail. The gold inlaid in the center of the handrail has a painstackingly detailed chintz pattern etched into it. To call this staircase ostentatious would be an understatement... To ascend the staircase head <b>north</b>, to the <b>west</b> you will descend.',
    directions: {
      north: 'staircase31',
      west: 'staircase11',
    },
    actions: {
      'inspect staircase': 'If only you could pull this gold off the handrails...',
    },
  },
  staircase31: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'hallway31',
      south: 'suite3a',
    },
  },
  suite3a: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'staircase31',
      east: 'suite3b',
    },
  },
  bathroom31: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      south: 'nursery31',
      west: 'office31',
    },
  },
  suite3b: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'hallway31',
      east: 'bathroom31',
      south: 'office31',
      west: 'suite3a',
    },
  },
  office31: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'suite3b',
      east: 'nursery31',
    },
  },
  nursery31: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'bathroom31',
      west: 'office31',
    },
  },
  hallway31: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'staircase32',
      south: 'suite3b',
      west: 'staircase31',
    },
  },
  staircase32: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'roof41',
    },
  },
  roof41: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      south: 'staircase32',
    },
  },
  staircase11: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'living13',
      south: 'living11',
    },
  },
  living11: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'staircase11',
      east: 'living12',
      south: 'kitchen11',
      west: 'frontdoor',
    },
  },
  kitchen11: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'living11',
      east: 'dining11',
    },
  },
  living13: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'pool1',
      east: 'staircase12',
      south: 'living12',
      west: 'staircase11',
    },
  },
  living12: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'living13',
      east: 'gameroom',
      south: 'dining11',
      west: 'living11'
    },
  },
  dining11: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'living12',
      east: 'study11',
      west: 'kitchen11',
    },
  },
  garage: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'living11',
    },
  },
  staircase12: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'staircase01',
      south: 'gameroom',
      west: 'living13',
    },
  },
  gameroom: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'staircase01',
      south: 'study',
      west: 'living12',
    },
  },
  study: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'gameroom',
    },
  },
  staircase01: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      west: 'hallway01',
    },
  },
  hallway01: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'staircase01',
      south: 'movietheater',
      west: 'winecellar',
    },
  },
  winecellar: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'hallway01',
      south: 'storage01',
    },
  },
  storage01: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'winecellar',
    },
  },
  movietheater: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'hallway01',
    },
  },
  pool1: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      north: 'guesthouse1',
      east: 'pool2',
      west: 'garden',
      south: 'living13',
    },
  },
  guesthouse1: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      south: 'pool1',
    },
  },
  garden: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'pool1',
    },
  },
  pool2: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    directions: {
      east: 'toolshed',
      west: 'pool1',
    },
  },
};

