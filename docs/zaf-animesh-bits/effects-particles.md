---
sidebar_position: 4
---

# Effects & Particles

ZAF Animesh Bits v2 features a comprehensive particle and visual effects system with extensive customization options.

## Basic Effects

### Core Effect Commands

#### Visibility Controls
```bash
/55 hidebits,0     # Hide everything
/55 hidebits,1     # Show attachment again
/55 hidetip        # Cycle through hide sections
/55 hidetip,1      # Hide tip only
/55 hidetip,2      # Hide tip and middle
/55 hidetip,-1     # Show all parts again
```

#### Cleaning & Stopping
```bash
/55 clean          # Remove all wetness and cum effects
/55 stop           # Stop all animations and effects
```

### Throbbing Effects
```bash
/55 throb,1        # Enable throbbing
/55 throb,-1       # Disable throbbing
```

### Wetness Effects
```bash
/55 wet            # Apply wetness effect
/55 wetcolor,COLOR # Set wetness color (LSL color format)
```

**Example:**
```bash
/55 wetcolor,<1.0,0.5,0.0>  # Orange wetness tint
```

### Rubbing Effects
```bash
/55 rub,INTENSITY  # Values 0-3 (0=off, 3=fastest)
                   # Alternative animations: 4-7
```

### Twitching Effects

#### Basic Twitching
```bash
/55 twitch,INTENSITY,CHANCE
```
- **INTENSITY**: 0.1 (light) to 0.35 (strong). Default: 0.17
- **CHANCE**: 1-100 percentage chance to twitch. Default: 10

**Examples:**
```bash
/55 twitch,0.1,10   # Light twitching, 10% chance
/55 twitch,0.25,25  # Strong twitching, 25% chance
```

#### Advanced Twitching (v1.5.4.1+)
```bash
/55 twitch,TIMER,CHANCE,BASE_STR,MID_STR,TIP_STR
```
- **TIMER**: Duration in seconds
- **BASE_STR**: Base strength (-6 to 6)
- **MID_STR**: Middle strength (-5 to 5, horse: -6 to 6)
- **TIP_STR**: Tip strength (-4 to 4, ignored for horse version)

**Example:**
```bash
/55 twitch,0.35,10,1,3,3  # Custom twitch with varied strengths
```

## Particle Effects

### Basic Particle Commands

#### Cum Effects
```bash
/55 cum            # Basic cum effect
/55 cumin          # Cum with internal effects
```

#### Pee Effects
```bash
/55 pee            # Basic pee effect  
/55 peein          # Pee with internal effects
```

#### Pre-cum Effects
```bash
/55 pre            # Pre-cum droplets
```

#### Splattering Effects
```bash
/55 splattering,START_SPEED,TIMER
```
- **START_SPEED**: 0.2 (faster) to 5.9 (slower). Default: 1.0
- **TIMER**: Splash interval in seconds. Default: 0.2

**Examples:**
```bash
/55 splattering,1.0,0.2   # Default settings
/55 splattering,2.0,1.9   # Slower, less frequent
```

### Advanced Particle Customization

#### Custom Particle Properties
```bash
/55 cum,COLOR,SIZE,GLOW,FULLBRIGHT,CONSTANT
```
- **COLOR**: LSL color vector
- **SIZE**: 0.0 to 3.0+ (particle size)
- **GLOW**: 0.0 to 1.0 (glow intensity)
- **FULLBRIGHT**: 0 (off) or 1 (on)
- **CONSTANT**: 0 (timed) or 1 (endless)

**Example:**
```bash
/55 cum,<1,0,1>,2,0.03,1,1  # Purple, large, glowing, bright, endless
```

This format works for: `cum`, `cumin`, `pee`, `peein`

#### Global Particle Settings
```bash
/55 Constant       # Make all particles endless
/55 NoConstant     # Return to timed particles (default)
/55 fbright,1      # Enable fullbright for all particles
/55 fbright,0      # Disable fullbright
/55 particlesize,SIZE  # Overall size multiplier (default: 1.0)
/55 bust,1         # Stream particles like a hose
/55 bust,0         # Normal particle burst (default)
```

### Specialized Effects

#### Heat/Mist Effects
```bash
/55 heat,1         # Enable mist effect when covered
/55 heat,-1        # Disable mist effect
```

#### Wet Droplets
```bash
/55 wetdrops,1     # Enable wet droplets
/55 wetdrops,-1    # Disable wet droplets
```

#### Flexi Cum
```bash
/55 flexicum,1     # Enable flexi cum strands
/55 flexicum,-1    # Disable flexi cum strands
```

#### Mesh Cum Strands
```bash
/55 goo,IDLE_ANIM,BALLS,BASE,MID,TIP
```
- Use **1** to enable, **-1** to disable for each location
- Use **-** to skip locations

**Examples:**
```bash
/55 goo,-1,-1,-1,-1,-1    # Turn off all mesh cum
/55 goo,1,1,1,1,1         # Enable all mesh cum
/55 goo,-,-,-,-,1         # Only enable tip cum
```

## Advanced Particle Editing

### Particle Preset System
The HUD includes preset particle configurations. Access them through:
- **Extras Tab** → **Particle Presets**
- **Custom Presets**: Edit notecards in HUD contents (`!#1cum`, `!#1pee`, `!#1pre`, `!#1wet`)

### Advanced Particle Editor
```bash
/55 ppedits,EDIT_NUMBER,SIZE,DISTANCE,TIMER,SLEEP,EJACULATE_COUNT,TEXTURE,SCALE_START,SCALE_END,MAX_TRANS,MIN_TRANS,COLOR_START,COLOR_END,GLOW_START,GLOW_END,MAX_AGE,BURST_COUNT,BURST_RATE,BURST_SPEED_MAX,BURST_SPEED_MIN,ACCELERATE,ANGLE_START,ANGLE_END
```

#### Edit Numbers:
- **0**: Pre-cum
- **1**: Splattering  
- **2**: Pee
- **3**: Pee-in
- **4**: Cum
- **5**: Cum-in
- **6**: Wet droplets
- **7**: Steam

#### Key Parameters:
- **SIZE**: Particle size multiplier
- **DISTANCE**: How far particles travel (1.0 = default)
- **TIMER**: Effect duration (1.0 = default speed)
- **SLEEP**: Particle emission time extension
- **EJACULATE_COUNT**: Number of ejaculation cycles
- **SCALE_START/END**: Starting and ending particle scale vectors
- **MAX_TRANS/MIN_TRANS**: Transparency range (0.0-1.0)
- **COLOR_START/END**: Starting and ending colors (LSL vectors)
- **GLOW_START/END**: Glow intensity range (0.0-1.0)
- **MAX_AGE**: Particle lifetime in seconds
- **BURST_COUNT**: Particles per burst
- **BURST_RATE**: Bursts per second
- **ACCELERATE**: Directional force vector

**Example - Custom Pee Effect:**
```bash
/55 ppedits,2,1.5,-,0.8,-,-,-,<0.08,0.25,0>,<0.10,0.50,0>,0.99,0,<1,1,0>,<1,1,0>,0.02,0.02,2,5,0.5,0.8,0.3,<0,0,-9.8>,0,1
```

### Fluid Color Customization
```bash
/55 colorcum,COLOR     # Set cum color
/55 colorpee,COLOR     # Set pee color
```

**Examples:**
```bash
/55 colorcum,<0.40171,0.85387,1.00000>    # Light blue cum
/55 colorpee,<1.00000,0.85387,0.40171>    # Yellow pee
```

## Condom Effects

### Basic Condom Control
```bash
/55 condom,1       # Enable condom
/55 condom,-1      # Disable condom
```

### Condom Size Limiting
Set maximum condom inflation size (controlled via HUD Extras tab):
- **Range**: 1-21
- **Default**: No limit
- **Note**: Condoms don't explode, they just stop growing

## Ball Effects

### Ball Inflation Control
```bash
/55 bmult,THICKNESS,WEIGHT
```
- **THICKNESS**: -X to +X steps within min/max limits
- **WEIGHT**: -X to +X steps within min/max limits

**Examples:**
```bash
/55 bmult,5,0      # Increase thickness by 5, weight unchanged
/55 bmult,-3,-2    # Decrease thickness by 3, weight by 2
/55 bmult,0,10     # Weight only increase
```

### Ball Animation Control
```bash
/55 banim,1        # Enable ball idle animations
/55 banim,-1       # Disable ball idle animations
```

### Ball Positioning
```bash
/55 tup,VALUE      # Tilt balls up/down (-5 to 5, 0 resets)
/55 tside,VALUE    # Tilt balls left/right (-5 to 5, 0 resets)
```

## Animation Integration

### Walk Animation Control
```bash
/55 walkanims,1    # Enable walk/fly animations
/55 walkanims,0    # Enable only ball animations
/55 walkanims,-1   # Disable all walk animations
```

## Effect Troubleshooting

### Common Issues:
1. **Particles not showing**: Check `/55 fbright,1` and particle size
2. **Too many particles**: Reduce burst count and rate in ppedits
3. **Particles too fast**: Increase timer value or reduce burst speed
4. **Effects not cleaning**: Use `/55 clean` followed by `/55 stop`
5. **Wet droplets missing**: Ensure `/55 wetdrops,1` is enabled

### Reset Commands:
```bash
/55 stop           # Stop all effects
/55 clean          # Clean all visual effects  
/55 NoConstant     # Reset to timed particles
/55 particlesize,1 # Reset particle size to default
```

## Tips for Best Results

1. **Start Simple**: Use basic commands before customizing with ppedits
2. **Test Settings**: Make small adjustments and test before major changes
3. **Save Presets**: Add custom ppedits to HUD notecards for reuse
4. **Monitor Performance**: Complex particle effects can impact FPS
5. **Use Dashes**: In ppedits, use `-` to skip parameters you don't want to change
