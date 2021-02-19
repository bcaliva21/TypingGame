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
      east: 'clearing21',
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
  balcony2: {
    description: 'You are on a balcony that over looks the main living room in the house. '
  }
};

