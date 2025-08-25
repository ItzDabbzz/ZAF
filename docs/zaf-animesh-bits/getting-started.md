---
sidebar_position: 2
---

# Getting Started

This guide will help you set up and start using your ZAF Animesh Bits v2 attachment.

## Initial Setup

1. **Wear the Attachment**: Attach the ZAF Animesh Bits to your avatar
2. **Wear the HUD**: Attach the control HUD to your screen
3. **Wait for Initialization**: Allow a moment for the system to fully load

## HUD Interface Overview

When you open the HUD, you'll see several tabs with different functions:

### Effects Tab

The **Effects** tab contains the most commonly used controls:

#### Basic Controls
- **Hide**: Hides all parts and cleans effects. Click again to show
- **Cleans**: Removes cum droplets, wetness, and textures
- **Stop**: Stops all animations, effects, and removes user access

#### Ball Animations
- **1, 2**: Forward ball bounce (for bottoms)
- **1, 2, 3, 4**: Thrusting ball bounce (for tops)

#### Effects
- **Throb**: Makes the attachment pulsate
- **Wetness**: Controls shine effects
- **Rubbing**: Creates back-and-forth rubbing effect
- **Alpha**: Hides tip and midsection
- **Foreskin**: Controls foreskin positioning
- **Twitch**: Causes twitching (works on all states)
- **Pre cum**: Creates pre-droplet effects

#### Particle Effects
- **Splattering**: Wet glaze with splatter particles
- **Cum/Cumin**: Milky covering with particles
- **Pee/Peein**: Wet covering with color change
- **Condom**: Toggles condom layer

#### Special Controls
- **Two Dots** (upper right): 
  - Upper dot: Endless climax
  - Lower dot: Streaming particles

### States Tab

Controls positioning and states:

- **State Buttons**: Various erection states (wait between changes)
- **Tilt**: Adjust cock position (left/right/up/down)
- **Orb Tilt**: Adjust ball positioning
- **Orb Drop & Lift**: Raise or lower balls
- **Red Buttons**: Reset positions

### Settings Tab

#### Inflation Settings
Configure ball inflation behavior:
- **LobSided**: Makes one ball hang lower
- **MinThick/MaxThick**: Ball thickness range
- **MinWeight/MaxWeight**: Ball weight range  
- **Time**: Inflation timer in seconds
- **DrainSkip**: Cum cycles before deflation
- **Pouch**: Adds ball warmer (requires balls active)

#### Texture Settings
- **Gear Icon**: Access gloss settings
- **Penis/Balls/Condom/Piercing/Pouch**: Cycle through textures
- **Tattoo**: Additional styling textures
- **T**: Transparency controls
- **Touch Texture Names**: Input custom texture UUIDs

#### Color Settings
- **Part Selection**: Choose what to color (✓ marker shows selection)
- **Color Picker**: Click and drag to apply colors instantly
- **Color Palettes**: 5 white palettes for storing favorite colors

### Extras Tab

Advanced toggles and settings:
- **Effects Toggles**: Mist, droplets, animations, sounds
- **Ask Access**: Control friend requests
- **Public Access**: Allow anyone to control
- **Add Friends**: Manage access list (up to 5 friends)
- **2nd Bit Support**: Enable dual attachment controls
- **CondomSizeLimit**: Maximum condom inflation size
- **Piercings**: Individual piercing controls
- **Particle Presets**: Pre-configured particle effects

## Basic Commands

### Essential Commands
```bash
/55 usersettings    # Open settings menu
/55 clean           # Clean all effects
/55 stop            # Stop all animations
/55 hidebits,0      # Hide everything
/55 hidebits,1      # Show attachment
```

### Quick State Changes
```bash
/55 play,0          # Flaccid state
/55 play,15         # Erect state
/55 play,18         # Full erect state
```

### Basic Effects
```bash
/55 throb,1         # Start throbbing
/55 wet             # Apply wetness
/55 cum             # Trigger cum effect
/55 pee             # Trigger pee effect
```

## Tips for New Users

1. **Start Simple**: Begin with the Effects tab before exploring advanced features
2. **Wait Between States**: Allow animations to complete before selecting new states
3. **Use Red Buttons**: Reset position controls with red buttons
4. **Save Colors**: Use the 5 color palettes to store your favorite combinations
5. **Check Transparency**: Adjust transparency if textures conflict with avatar parts

## Friend Access Setup

To allow friends to control your attachment:

1. **Method 1 - Add to List**:
   - Go to Extras tab
   - Click "Add Friends"
   - Enter friend's name in dialog

2. **Method 2 - Request System**:
   - Friend clicks on your attachment
   - They can request permission
   - You approve/deny the request

3. **Method 3 - Public Access**:
   - Enable "Public Access" in Extras tab
   - Anyone can control when touched

## Next Steps

Once you're comfortable with the basics:
- Explore [Animation States](./animation-states) for detailed state controls
- Learn about [Effects & Particles](./effects-particles) for visual customization
- Check out [Customization](./customization) for textures and materials
- Review [Advanced Features](./advanced-features) for dual attachment setup

## Troubleshooting

If you encounter issues:
- Try `/55 stop` followed by `/55 clean`
- Ensure the HUD is properly attached
- Check that you're using the correct command channel (`/55`)
- Refer to the [Troubleshooting](./troubleshooting) guide for specific issues
