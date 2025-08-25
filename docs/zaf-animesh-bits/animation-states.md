---
sidebar_position: 3
---

# Animation States

The ZAF Animesh Bits system supports 19 different states (0-18) with smooth transitions and advanced positioning controls.

## Basic State Control

### State Range
States can range from **0 to 18**:
- **0**: Completely flaccid
- **1-14**: Progressive erection stages
- **15**: Standard erect state
- **16-17**: Intermediate erect states
- **18**: Maximum erection

### Basic State Command
```bash
/55 play,STATE
```

**Examples:**
```bash
/55 play,0    # Flaccid state
/55 play,8    # Mid-erection
/55 play,15   # Standard erect
/55 play,18   # Maximum erect
```

### State with Speed Control
```bash
/55 play,STATE,-,SPEED
```

- **Speed range**: 0.2 to 2.0
- **Lower values**: Slower transition
- **Higher values**: Faster transition

**Examples:**
```bash
/55 play,0,-,0.45     # Slow transition to flaccid
/55 play,15,-,1.8     # Fast transition to erect
```

## Special State Animations

States **15** and **18** support special directional animations:

### Left/Right Variations
```bash
/55 play,15,l    # Erect state, left variation
/55 play,15,r    # Erect state, right variation
/55 play,18,l    # Max erect state, left variation
/55 play,18,r    # Max erect state, right variation
```

## Advanced Positioning (Erect States Only)

### Cock Tilting
For erect cocks, you can precisely control the curvature:

```bash
/55 playc,BASE,MID,TIP,PAUSER
```

#### Parameters:
- **BASE**: -5 to 5 (base curvature)
- **MID**: -4 to 4 (middle curvature)  
- **TIP**: -3 to 3 (tip curvature)
- **PAUSER**: 0.2 to 2.0 (optional, controls speed)

#### Examples:
```bash
/55 playc,-3,1,-1        # Curve base down, mid up, tip down
/55 playc,,,3            # Only tilt tip up
/55 playc,+,,            # Tilt base up one step
/55 playc,+,+,+          # Tilt all sections up
/55 playc,,,-            # Tilt only tip down
/55 playc,+,-,-          # Mixed directional tilting
```

#### Incremental Tilting:
Instead of specific values, you can use **+** or **-** for step-by-step adjustments:
- **+**: Tilt up one step
- **-**: Tilt down one step

## Direct Play Animations

### Basic Direct Play
```bash
/55 directplay,ANIMATION_NAME
```

### Extended Direct Play
```bash
/55 directplay,ANIMATION_NAME,TIMER,PLAYER_ANIM,ERECTION,COCK_BASE,COCK_MID,COCK_TIP
```

#### Parameters:
- **TIMER**: Duration in seconds (0 = endless until stopped)
- **PLAYER_ANIM**: Avatar animation to play simultaneously
- **ERECTION**: 1 to set erect, 0 to maintain current state
- **COCK_BASE/MID/TIP**: Particle position adjustments (-6 to 6)

### Stopping Direct Play
```bash
/55 directstop    # Stop current directplay animation
```

## Masturbation Animations

### Basic Masturbation
```bash
/55 masturbate    # Start masturbation sequence
```

### Masturbation Examples
```bash
# Paw animations with character movement
/55 directplay,pp0,7,paw0,1,0,1,1     # Style 0, 7 seconds
/55 directplay,pp1,7,paw1,1,0,1,1     # Style 1, 7 seconds
/55 directplay,pp2,7,paw2,1,-1,0,1    # Style 2, adjusted positioning
/55 directplay,pp3,8,paw3,1,0,0,1     # Style 3, 8 seconds
/55 directplay,pp4,7,paw4,1,0,0,1     # Style 4, 7 seconds
/55 directplay,pp5,11,paw5,1,0,0,1    # Style 5, 11 seconds
/55 directplay,pp6,15,paw6,1,4,1,0    # Style 6, 15 seconds
```

## Character Animations

### Dominant Animations
```bash
# Preparation
/55 directplay,ubit-prep,10,user-prep,1,0,1,1

# Hip sway variations
/55 directplay,ubit-dsway,10,user-dsway,1,0,1,1
/55 directplay,ubit-dsway,10,user-dsway1,1,0,1,1

# Combined with movement
/55 directplay,wr30,10,user-dsway,1,-5,-2,-1

# Stagger sway
/55 directplay,ubit-jonit,20,user-jonit,1,0,1,1
```

### Feminine Animations
```bash
# Hip sway styles
/55 directplay,ubit-fsway0,10,user-fsway0,1,-5,-2,-1
/55 directplay,ubit-fsway1,10,user-fsway0,1,-2,1,1
```

### Movement Animations

#### Walk Animations
```bash
/55 directplay,w00    # Walk style 0
/55 directplay,w10    # Walk style 1
/55 directplay,w20    # Walk style 2
/55 directplay,w30    # Walk style 3
```

#### Run Animations
```bash
/55 directplay,wr00   # Run style 0
/55 directplay,wr10   # Run style 1
/55 directplay,wr20   # Run style 2
/55 directplay,wr30   # Run style 3
```

#### Turn Animations
```bash
/55 directplay,wtl00  # Turn left
/55 directplay,wtr00  # Turn right
```

#### Special (Anthro Furry Reforged Only)
```bash
/55 directplay,wrf20  # Special reforged animation
```

## Ball Swing Animations

### Available Swing Types
- **bsr0_0, bsr1_0**: Rear swing variations
- **bs0_0, bs1_0, bs2_0, bs3_0**: Standard swings

### Speed Variations
Each animation supports 4 speeds (0-3, where 3 is fastest):

```bash
/55 ballswing,bs0_0    # Swing style 0, speed 0
/55 ballswing,bs0_1    # Swing style 0, speed 1
/55 ballswing,bs0_2    # Swing style 0, speed 2
/55 ballswing,bs0_3    # Swing style 0, speed 3 (fastest)
```

## Masturbation Timing Control

### Stage Configuration
The masturbation sequence has 7 stages (0-6):
- **Stage 0-1**: Initial stages
- **Stage 2**: Leaking/throbbing stage
- **Stage 3-4**: Building stages
- **Stage 5**: Climax stage  
- **Stage 6**: Ending stage

### Custom Stage Timing
```bash
/55 timers,STAGE_NUMBER,DURATION_SECONDS
```

**Examples:**
```bash
/55 timers,0,10    # Stage 0 lasts 10 seconds
/55 timers,2,15    # Leaking stage lasts 15 seconds
/55 timers,5,20    # Climax stage lasts 20 seconds
```

## Tips for Animation States

1. **Wait Between Changes**: Allow current state to complete before selecting new one
2. **Use Speed Control**: Adjust transition speed for more natural movement
3. **Combine Effects**: Mix states with particle effects for enhanced realism
4. **Save Positions**: Remember effective playc combinations for quick access
5. **Test Gradually**: Try small adjustments before making major position changes

## Troubleshooting States

- **Stuck in State**: Use `/55 stop` then select new state
- **Jerky Transitions**: Try slower speed values (0.2-0.8)
- **Position Reset**: Use red buttons on HUD or `/55 playc,0,0,0`
- **Animation Conflicts**: Stop directplay before changing states
