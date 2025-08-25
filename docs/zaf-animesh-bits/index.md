---
sidebar_position: 1
---

# ZAF Animesh Bits v2 Documentation

Welcome to the comprehensive documentation for **ZAF Animesh Bits v2** - an advanced animesh attachment system for Second Life with extensive customization, animation, and effect capabilities.

## Overview

ZAF Animesh Bits v2 is a sophisticated animesh attachment that provides realistic animations, particle effects, and extensive customization options. This system includes a comprehensive HUD interface for easy control and supports advanced features like dual attachment compatibility for Premium Second Life accounts.

## Key Features

- **Advanced Animation System**: Multiple states (0-18) with realistic transitions
- **Particle Effects**: Customizable particles for various effects
- **Dual Attachment Support**: Premium SL accounts can wear two attachments simultaneously
- **Extensive Customization**: Textures, colors, materials, and PBR support
- **Interactive Controls**: Friend access system and external control capabilities
- **Sound System**: Customizable audio effects
- **Effects & Animations**: Wetness, throbbing, twitching, and more

## Quick Start

1. **Wear the attachment** and the included HUD
2. **Open the HUD** to access the main control interface
3. **Explore the tabs**:
   - **Effects**: Basic animations and particle effects
   - **States**: Position controls and cock states
   - **Settings**: Customization options for textures, colors, and inflation
   - **Extras**: Advanced features and toggles

## Command Channel

The primary command channel is `/55`. All commands follow the format:
```
/55 command,parameter1,parameter2,...
```

## Getting Help

- Use `/55 usersettings` to access additional configuration options
- Check the **Tips Image** reference: ![ZAF Bit Tips](/img/ZAF-Bit-Tips-PSA.png)
- Join our community for support and updates

## Documentation Structure

This documentation is organized into the following sections:

- **[Getting Started](./getting-started)** - Basic setup and HUD navigation
- **[Commands Reference](./commands-reference)** - Complete command listing
- **[Animation States](./animation-states)** - State controls and animations  
- **[Effects & Particles](./effects-particles)** - Visual effects and customization
- **[Customization](./customization)** - Textures, colors, and materials
- **[Advanced Features](./advanced-features)** - Dual attachments, external control
- **[Troubleshooting](./troubleshooting)** - Common issues and solutions

## Version Information

This documentation covers **ZAF PBR v2** with the following notable changes from previous versions:

### Removed Commands
- `/55 fb` - Now handled by Texture Applier Command
- `/55 storecock` - Now handled by Applying Textures
- `/55 setextras` - Now handled by Applying Textures  
- `/55 pouchcum` - Now handled by Cum/CockWetness Texturing
- `/55 conc,TextureUUID` and `/55 conc1,Masking` - Removed
- `/55 piercol` - Handled by `/551551 pbr,piercing...` command

### Changed Commands
- `/55 close4all` → `/55 privacy,0`
- `/55 open4all` → `/55 privacy,1`
- `/55 pouch,On/Off,Trans,Glow` → `/55 pouch,On/Off`
- `/55 setgloss` → Now runs on channel `/551551`
- `/55 piercings` → Now only on/off switch

---

*Copyright © Johan Bizet & Doppelganger Ghost*
