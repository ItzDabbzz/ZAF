# Commands Reference

Complete reference guide for all ZAF Animesh Bits v2 commands organized by category.

## Command Channels

- **Primary Channel**: `/55` - Main commands
- **Texture Channel**: `/551551` - Texture and PBR commands  
- **HUD Channel**: `/552` - HUD configuration
- **External Control**: `/5515512` - Remote control commands
- **Particle Info**: `/55053` - Automatic particle broadcasting
- **Animation Channel**: `/506901` - Texture animation commands
- **Secondary Channel**: `/-55` - Second attachment (dual mode)

## Basic Controls

### Visibility and State
| Command | Description |
|---------|-------------|
| `/55 hidebits,0` | Hide entire attachment |
| `/55 hidebits,1` | Show attachment |
| `/55 hidetip` | Cycle through hiding sections |
| `/55 hidetip,1` | Hide tip only |
| `/55 hidetip,2` | Hide tip and middle |
| `/55 hidetip,-1` | Show all parts |
| `/55 clean` | Remove all wetness/cum effects |
| `/55 stop` | Stop all animations and effects |

### Erection States (0-18)
| Command | Description |
|---------|-------------|
| `/55 play,STATE` | Set erection state (0-18) |
| `/55 play,STATE,-,SPEED` | Set state with speed (0.2-2.0) |
| `/55 play,15,l` | Erect state, left variation |
| `/55 play,15,r` | Erect state, right variation |
| `/55 play,18,l` | Max erect, left variation |
| `/55 play,18,r` | Max erect, right variation |

### Positioning (Erect States Only)
| Command | Description |
|---------|-------------|
| `/55 playc,BASE,MID,TIP,PAUSER` | Precise cock curvature control |
| `/55 playc,+,,` | Tilt base up one step |
| `/55 playc,,,-` | Tilt tip down one step |
| `/55 tilt,Y_AXIS,X_AXIS` | Global tilting |
| `/55 tiltrot,<rotation>` | Set rotation quaternion |
| `/55 bitloc,<position>` | Set position vector |

## Effects and Animations

### Basic Effects
| Command | Description |
|---------|-------------|
| `/55 throb,1` | Enable throbbing (-1 to disable) |
| `/55 wet` | Apply wetness effect |
| `/55 wetcolor,<color>` | Set wetness color |
| `/55 rub,INTENSITY` | Rubbing effect (0-3, or 4-7 alt) |
| `/55 twitch,INTENSITY,CHANCE` | Basic twitching |
| `/55 twitch,TIMER,CHANCE,BASE,MID,TIP` | Advanced twitching |

### Ball Controls
| Command | Description |
|---------|-------------|
| `/55 ballswing,ANIMATION` | Ball swing animations |
| `/55 bmult,THICKNESS,WEIGHT` | Manual ball inflation |
| `/55 tup,VALUE` | Tilt balls up/down (-5 to 5) |
| `/55 tside,VALUE` | Tilt balls left/right (-5 to 5) |
| `/55 banim,1` | Enable ball idle animations (-1 disable) |

### Particle Effects
| Command | Description |
|---------|-------------|
| `/55 cum` | Basic cum effect |
| `/55 cumin` | Internal cum effect |
| `/55 pee` | Basic pee effect |
| `/55 peein` | Internal pee effect |
| `/55 pre` | Pre-cum droplets |
| `/55 splattering,SPEED,TIMER` | Splattering effect |
| `/55 cum,<color>,SIZE,GLOW,BRIGHT,CONSTANT` | Custom cum particles |

### Global Particle Settings
| Command | Description |
|---------|-------------|
| `/55 Constant` | Make all particles endless |
| `/55 NoConstant` | Return to timed particles |
| `/55 fbright,1` | Enable fullbright (0 disable) |
| `/55 particlesize,SIZE` | Overall particle size multiplier |
| `/55 bust,1` | Stream particles (0 normal) |
| `/55 heat,1` | Mist effects (-1 disable) |
| `/55 wetdrops,1` | Wet droplets (-1 disable) |
| `/55 flexicum,1` | Flexi cum (-1 disable) |

### Mesh Cum
| Command | Description |
|---------|-------------|
| `/55 goo,IDLE,BALLS,BASE,MID,TIP` | Mesh cum strands control |
| `/55 goo,-1,-1,-1,-1,-1` | Disable all mesh cum |
| `/55 goo,1,1,1,1,1` | Enable all mesh cum |

## Direct Play Animations

### Basic Direct Play
| Command | Description |
|---------|-------------|
| `/55 directplay,ANIMATION` | Play named animation |
| `/55 directplay,ANIM,TIMER,PLAYER,ERECT,BASE,MID,TIP` | Extended control |
| `/55 directstop` | Stop direct play animation |

### Masturbation Animations
| Command | Description |
|---------|-------------|
| `/55 masturbate` | Start masturbation sequence |
| `/55 directplay,pp0,7,paw0,1,0,1,1` | Paw style 0 |
| `/55 directplay,pp1,7,paw1,1,0,1,1` | Paw style 1 |
| `/55 directplay,pp2,7,paw2,1,-1,0,1` | Paw style 2 |
| `/55 directplay,pp3,8,paw3,1,0,0,1` | Paw style 3 |
| `/55 directplay,pp4,7,paw4,1,0,0,1` | Paw style 4 |
| `/55 directplay,pp5,11,paw5,1,0,0,1` | Paw style 5 |
| `/55 directplay,pp6,15,paw6,1,4,1,0` | Paw style 6 |

### Character Animations
| Command | Description |
|---------|-------------|
| `/55 directplay,ubit-prep,10,user-prep,1,0,1,1` | Preparation |
| `/55 directplay,ubit-dsway,10,user-dsway,1,0,1,1` | Dom hip sway |
| `/55 directplay,ubit-jonit,20,user-jonit,1,0,1,1` | Stagger sway |
| `/55 directplay,ubit-fsway0,10,user-fsway0,1,-5,-2,-1` | Fem sway 0 |
| `/55 directplay,ubit-fsway1,10,user-fsway0,1,-2,1,1` | Fem sway 1 |

### Movement Animations
| Command | Description |
|---------|-------------|
| `/55 directplay,w00` | Walk style 0 |
| `/55 directplay,w10` | Walk style 1 |
| `/55 directplay,w20` | Walk style 2 |
| `/55 directplay,w30` | Walk style 3 |
| `/55 directplay,wr00` | Run style 0 |
| `/55 directplay,wr10` | Run style 1 |
| `/55 directplay,wr20` | Run style 2 |
| `/55 directplay,wr30` | Run style 3 |
| `/55 directplay,wtl00` | Turn left |
| `/55 directplay,wtr00` | Turn right |
| `/55 directplay,wrf20` | Reforged special (Anthro Furry only) |

## Customization Commands

### Texture System
| Command | Description |
|---------|-------------|
| `/551551 pbr,SLOT,0,TEXTURE_UUID` | Quick texture swap |
| `/551551 pbr,SLOT,0,TEX,REPEATS,OFFSETS,ROT,COLOR,ALPHA,...` | Full PBR |
| `/551551 cel,COCK,BALLS,FUR,BARBS` | Cell-shading toggle |

### Color and Materials
| Command | Description |
|---------|-------------|
| `/551551 pbr,SLOT,-,-,-,-,-,<color>` | Color only |
| `/551551 setgloss,SHAFT,BALLS,CUM_SHAFT,CUM_BALLS,GLOSS...` | Complete gloss |
| `/551551 wetlayer,0.99` | Wet layer transparency |
| `/551551 cumlayer,0.99` | Cum layer transparency |

### Specialized Coloring
| Command | Description |
|---------|-------------|
| `/551551 barbcol,<color>,GLOW,SPEC,GLOSS,ENV,EMIS,MET,ROUGH,FB` | Barb coloring |
| `/551551 rimcol,<color>,GLOW,SPEC,GLOSS,ENV,EMIS,MET,ROUGH,FB` | Rim coloring |
| `/551551 cocktipcol,<color>,GLOW,SPEC,GLOSS,ENV,EMIS,MET,ROUGH,FB` | Tip coloring |
| `/551551 pierccol,<color>,GLOW,SPEC,GLOSS,ENV,EMIS,MET,ROUGH,FB` | Piercing coloring |

### Cum/Wetness Texturing
| Command | Description |
|---------|-------------|
| `/551551 leg,SLOT,TEXTURE,REPEATS,OFFSETS,ROT,ALPHA_MODE,...` | Advanced texturing |
| `/55 colorcum,<color>` | Set cum color |
| `/55 colorpee,<color>` | Set pee color |

## Advanced Particle Editing

### Particle Editor
| Command | Description |
|---------|-------------|
| `/55 ppedits,NUM,SIZE,DIST,TIMER,SLEEP,EJAC,TEX,SCALE_START,SCALE_END,MAX_TRANS,MIN_TRANS,COLOR_START,COLOR_END,GLOW_START,GLOW_END,MAX_AGE,BURST_COUNT,BURST_RATE,BURST_SPEED_MAX,BURST_SPEED_MIN,ACCELERATE,ANGLE_START,ANGLE_END` | Complete particle control |

### Edit Numbers
- **0**: Pre-cum
- **1**: Splattering
- **2**: Pee
- **3**: Pee-in
- **4**: Cum
- **5**: Cum-in
- **6**: Wet droplets
- **7**: Steam

## Sound System

### Sound Control
| Command | Description |
|---------|-------------|
| `/55 Sound,TOGGLE,CUM_VOL,SPLAT_VOL,PEE_VOL` | Master sound control |
| `/55 Sound,1,0.2,0.2,0.4` | Default settings |
| `/55 Sound,-1` | Disable all sounds |
| `/55 throbsound,0.01` | Throb sound volume |

### Custom Sounds
| Command | Description |
|---------|-------------|
| `/55 wetsfx,UUID1,UUID2,...,UUID8` | Custom wet sounds (1-8) |
| `/55 psfx,UUID` | Custom pee sound |
| `/55 csfx,UUID` | Custom cum sound |
| `/55 wetsfx` | Reset wet sounds |
| `/55 psfx` | Reset pee sound |
| `/55 csfx` | Reset cum sound |

## Access Control

### Privacy and Access
| Command | Description |
|---------|-------------|
| `/55 privacy,1` | Public access (open4all) |
| `/55 privacy,0` | Private access (close4all) |
| `/55 askaccess,1` | Enable friend requests |
| `/55 askaccess,-1` | Disable friend requests |
| `/55 msgout,1` | Enable message output |
| `/55 msgout,-1` | Disable message output |

### External Control
| Command | Description |
|---------|-------------|
| `/55 bedtoggle,1` | Enable external control |
| `/55 bedtoggle,0` | Disable external control |
| `/55 cleanban` | Clear banned users |
| `/55 cleanallow` | Clear allowed users |
| `/5515512 UUID,CODE,MESSAGE` | Send external command |

## Piercings and Accessories

### Piercings
| Command | Description |
|---------|-------------|
| `/55 piercings,TIP,TIP_PIER,MID,COCK_RING,SHEATH,BALLS` | All piercings |
| `/55 condom,1` | Enable condom (-1 disable) |

### Knot Growth (Knotted Models)
| Command | Description |
|---------|-------------|
| `/55 kt,TIMER,MULTIPLIER` | Knot growth settings |
| `/55 kt,15,3` | Default (15 sec, 3x size) |
| `/55 kt,-1` | Disable knot growth |

## Model-Specific Settings

### Feline/Canine Configuration
| Command | Description |
|---------|-------------|
| `/55 peeninfo` | Get current settings |
| `/55 setedits,STYLE,THICK,LENGTH,BARBS,PACKAGE,FUR,KNOT,...` | Full config |
| `/55 setedits,-,-,LENGTH` | Change length only |
| `/55 pace,1` | Fast erection transitions (0 normal) |

## Dual Attachment (Premium Accounts)

### Dual Setup
| Command | Description |
|---------|-------------|
| `/55 bits,-1` | Move first attachment to channel -55 |
| `/552 EnableHud` | Enable dual control buttons |
| `/-55 bits,1` | Restore to channel 55 |
| `/552 DisableHud` | Disable dual buttons |

## Animation Control

### Texture Animation
| Command | Description |
|---------|-------------|
| `/506901 SLOT,LINKS,MODES,FACES,X,Y,START,END,FPS` | GIF animation |
| `/506901 texanim1,26,3,-1,3,3,0,9,12` | Animated balls tattoo |
| `/506901 texanim1,-1` | Clear animation slot |

### Walk Animation Control
| Command | Description |
|---------|-------------|
| `/55 walkanims,1` | Enable walk animations |
| `/55 walkanims,0` | Balls only |
| `/55 walkanims,-1` | Disable all |

## Timing and Sequences

### Masturbation Timing
| Command | Description |
|---------|-------------|
| `/55 timers,STAGE,SECONDS` | Set stage duration |
| `/55 timers,0,10` | Stage 0 = 10 seconds |
| `/55 timers,2,15` | Leaking stage = 15 seconds |

## Utility Commands

### Information and Settings
| Command | Description |
|---------|-------------|
| `/55 usersettings` | Open settings menu |

### Reset and Defaults
| Command | Description |
|---------|-------------|
| `/55 stop` | Stop all effects |
| `/55 clean` | Clean all visual effects |
| `/55 NoConstant` | Reset particle timing |
| `/55 particlesize,1` | Reset particle size |

## Command Syntax Notes

- **Dashes (`-`)**: Skip parameters without changing them
- **Empty values**: Terminate command processing at that point
- **Color format**: `<R,G,B>` with values 0.0-1.0
- **Vector format**: `<X,Y,Z>` for positions/rotations
- **Boolean values**: 1 = enable, -1 = disable, 0 = neutral/default
- **Ranges**: Always check parameter ranges in individual command descriptions
