# Advanced Features

ZAF Animesh Bits v2 includes sophisticated features for power users, including dual attachment support, external control systems, and advanced configuration options.

## Dual Attachment Support (Premium Accounts)

Second Life Premium accounts can wear two animesh attachments simultaneously. ZAF Animesh Bits v2 supports this with dedicated dual-control features.

### Setup Process

#### Step 1: Configure First Attachment
1. Wear your first ZAF Animesh Bits attachment
2. Set it to use the secondary channel:
   ```bash
   /55 bits,-1
   ```
   This moves the first attachment to channel `-55`

#### Step 2: Enable HUD Dual Mode
1. Enable dual attachment mode on your HUD:
   ```bash
   /552 EnableHud
   ```
2. The HUD will close and refresh automatically
3. When reopened, you'll see new control buttons:
   - **Bits1**: Controls attachment on channel `/55`
   - **Bits2**: Controls attachment on channel `/-55`  
   - **Both**: Controls both attachments simultaneously

#### Step 3: Wear Second Attachment
1. Wear your second ZAF Animesh Bits attachment
2. It will automatically use the default channel `/55`
3. You can now control both attachments independently

### Dual Attachment Controls

#### Individual Control
```bash
# Control only first attachment (channel -55)
/-55 play,15
/-55 cum
/-55 throb,1

# Control only second attachment (channel 55)  
/55 play,12
/55 pee
/55 wet
```

#### Simultaneous Control
When using the HUD's "Both" button, commands are sent to both channels automatically.

### Reverting Dual Setup

#### Restore Single Mode
```bash
/-55 bits,1        # Restore first attachment to channel /55
/552 DisableHud    # Remove dual control buttons
```

:::warning Channel Compatibility
Changing channels may break compatibility with third-party accessories like "Its not Mine" cum systems. Only use dual setup when specifically needed.
:::

## External Control System

The external control system allows other users to send commands to your attachment remotely.

### Basic External Control Setup

#### Enable/Disable External Control
```bash
/55 bedtoggle,1    # Enable external control
/55 bedtoggle,0    # Disable external control
```

#### Manage Access Lists
```bash
/55 cleanban       # Clear banned user list
/55 cleanallow     # Clear allowed user list
```

### External Control Commands

Other users can send control commands using:
```bash
/5515512 USER_UUID,CODE,MESSAGE
```

#### Command Codes:
- **1110**: DirectStop + DirectPlay commands
- **1111**: General commands (play, playc, cum, pee, etc.)
- **1**: Named animation playback (sets erect state)

#### Examples:
```bash
# Stop current animation and play new one
/5515512 550e8400-e29b-41d4-a716-446655440000,1110,directstop

# Control erection state
/5515512 550e8400-e29b-41d4-a716-446655440000,1111,play,15

# Trigger cum effect
/5515512 550e8400-e29b-41d4-a716-446655440000,1111,cumin

# Play specific animation
/5515512 550e8400-e29b-41d4-a716-446655440000,1,ubit-fsway0
```

### Permission System

When someone attempts external control:
1. **First Time**: User receives permission request dialog
2. **Accept**: User is added to allowed list (permanent until cleared)
3. **Ignore/Ban**: User is added to banned list
4. **Subsequent Attempts**: 
   - Allowed users get immediate access
   - Banned users are blocked (must clear ban list to retry)

## Advanced Sound System

### Basic Sound Control
```bash
/55 Sound,TOGGLE,CUM_VOLUME,SPLAT_VOLUME,PEE_VOLUME
```

#### Parameters:
- **TOGGLE**: 1 (enable) or -1 (disable)
- **Volumes**: 0.0 to 1.0 (float values)

#### Examples:
```bash
/55 Sound,1,0.2,0.2,0.4    # Default settings
/55 Sound,-1               # Disable all sounds
/55 Sound,-,-,-,0          # Disable only pee sounds
```

### Custom Sound Files

#### Wet Sounds (1-8 files supported)
```bash
/55 wetsfx,UUID1,UUID2,UUID3,UUID4,UUID5,UUID6,UUID7,UUID8

# Reset to default
/55 wetsfx
```

#### Pee Sound Replacement
```bash
/55 psfx,SOUND_UUID

# Reset to default
/55 psfx
```

#### Cum Sound Replacement (v1.5.2+)
```bash
/55 csfx,SOUND_UUID

# Reset to default  
/55 csfx
```

#### Throb Sound Volume
```bash
/55 throbsound,VOLUME    # Default: 0.01
```

## Knot Growth System (Knotted Attachments Only)

### Knot Growth Configuration
```bash
/55 kt,TIMER,SIZE_MULTIPLIER
```

#### Parameters:
- **TIMER**: Duration knot stays enlarged (seconds)
- **SIZE_MULTIPLIER**: Growth factor (negative values shrink)

#### Behavior:
- Triggers automatically during climax
- Remains enlarged during climax + timer duration
- Returns to default size after timer expires
- Stops immediately with HUD Stop button

#### Examples:
```bash
/55 kt,15,3      # Default: 15 seconds, 3x size
/55 kt,30,5      # 30 seconds, 5x size
/55 kt,10,-2     # 10 seconds, shrink by 2x
/55 kt,-1        # Disable knot growth
```

## Message Output System

### External Message Broadcasting
```bash
/55 msgout,1     # Enable message output (default)
/55 msgout,-1    # Disable message output
```

When enabled, the attachment broadcasts commands for external systems to receive:
- Cum layer systems
- Arousal scripts  
- Third-party accessories

#### Broadcasted Commands:
`"ballswing"`, `"wet"`, `"wetdry"`, `"clean"`, `"rub"`, `"knot"`, `"hidetip"`, `"play"`, `"playc"`, `"throb"`, `"twitch"`, `"stop"`, `"cum"`, `"cumin"`, `"pee"`, `"peein"`, `"splattering"`, `"pre"`, `"condom"`

### Particle Information Broadcasting

The system automatically sends particle information on channel `/55053`:

#### Cum Events:
```
/55053 anparticle,cumfill,LSL_COLOR,FULLBRIGHT,-,-,PARTICLE_SIZE,CONSTANT,GLOW,TRANSPARENCY
```

#### Pee/Splattering Events:
```
/55053 anparticle,splattering,LSL_COLOR,FULLBRIGHT,-,-,PARTICLE_SIZE,CONSTANT,GLOW,TRANSPARENCY
```

- **CONSTANT**: 1 = endless, 0 = timed

## Model-Specific Features (Feline/Canine Variants)

### Advanced Model Configuration
```bash
/55 setedits,PENIS_STYLE,THICKNESS,LENGTH,BARBS,PACKAGE,FUR,KNOT_SIZE,LOBSIDED,MIN_THICK,MAX_THICK,MIN_WEIGHT,MAX_WEIGHT,TIMER,DRAIN_SKIP,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,ALT_SHEATH,-
```

### Get Current Configuration
```bash
/55 peeninfo    # Returns current setedits values
```

#### Style Options:
**Feline Models:**
- 0: Smooth
- 1: Flared tip
- 2: Smooth + knot
- 3: Flared + knotted

**FelineCanine Reforge:**
- 0: Feline
- 1: Canine tip + thin base
- 2: Feline + knot
- 3: Full canine

#### Parameter Ranges:
- **THICKNESS**: 0-19 (smaller states)
- **LENGTH**: 0-30
- **BARBS**: -1 (disable) or 0-7 (combinations)
- **PACKAGE**: -1 (disable), 0 (balls), 1 (balls+), 2 (balls++)
- **FUR**: -1 (disable), 0 (crotch), 1 (crotch+balls), 2 (balls only)
- **KNOT_SIZE**: 0-20
- **LOBSIDED**: 0-4
- **MIN/MAX_THICK**: 0-35/1-36 (min should be 1 below max)
- **MIN/MAX_WEIGHT**: 0-35/1-36 (min should be 1 below max)
- **TIMER**: Inflation time per step (seconds)
- **DRAIN_SKIP**: Climax cycles before deflation (0 = every time)
- **ALT_SHEATH**: -1 (default), 0 (down), 1 (up), 2 (further down)

#### Quick Examples:
```bash
# Change only length
/55 setedits,-,-,15

# Change style and size
/55 setedits,2,10,20
```

## Access Control Systems

### Friend Access Management
```bash
/55 askaccess,1     # Enable friend requests  
/55 askaccess,-1    # Disable friend requests
```

### Privacy Controls
```bash
/55 privacy,1       # Public access (anyone can control)
/55 privacy,0       # Private access (friends only)
```

## Performance and Positioning

### Global Positioning
```bash
/55 tiltrot,ROTATION_QUATERNION    # Set rotation
/55 bitloc,POSITION_VECTOR         # Set position
```

#### Examples:
```bash
/55 tiltrot,<0,0,0,1>              # Default rotation
/55 bitloc,<0.088837,0,0.015830>   # Custom position
```

### Global Tilting
```bash
/55 tilt,Y_AXIS,X_AXIS
```

**Example:**
```bash
/55 tilt,90,0    # Tilt 90 degrees upward
```

## Records and Data Management

:::info Data Recording Limitation
"Records Customization v1" can only record data from channel 55. Second attachments running on channel -55 are not recorded.
:::

## Troubleshooting Advanced Features

### Dual Attachment Issues:
- **HUD not showing dual buttons**: Ensure `/552 EnableHud` was used
- **Commands not working**: Check channel syntax (`/-55` vs `/55`)
- **Third-party conflicts**: Revert to single mode if accessories malfunction

### External Control Issues:
- **Permission requests not showing**: Check `/55 bedtoggle,1` is enabled
- **Commands ignored**: Verify user isn't banned (`/55 cleanban`)
- **UUID format**: Ensure proper UUID format in external commands

### Sound Issues:
- **Custom sounds not playing**: Verify sound file permissions and format
- **Volume problems**: Check individual volume settings vs master toggle
- **Missing sounds**: Reset to defaults with parameter-less commands

### Model Configuration Issues:
- **Invalid parameters**: Check ranges for each parameter
- **Conflicts**: Use `/55 peeninfo` to verify current settings
- **Reset needed**: Use HUD to restore defaults before manual configuration
