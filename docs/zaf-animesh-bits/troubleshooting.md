# Troubleshooting

Common issues and solutions for ZAF Animesh Bits v2.

## General Issues

### Attachment Not Responding

**Symptoms**: Commands not working, HUD not connecting
**Solutions**:
1. Check you're using the correct channel (`/55`)
2. Try `/55 usersettings` to verify connection
3. Detach and re-attach both attachment and HUD
4. Ensure attachment is properly rezzed and not "Loading..."
5. Check your viewer's script/animesh support

### Commands Not Working

**Symptoms**: Commands entered but no response
**Possible Causes & Solutions**:

#### Wrong Channel
- **Problem**: Using old command syntax
- **Solution**: Use `/55` for main commands, `/551551` for textures
- **Example**: `/55 play,15` not `//15 play`

#### Texture Commands
- **Problem**: Using `/55` for texture commands
- **Solution**: Use `/551551` for all texture/PBR commands
- **Example**: `/551551 pbr,cock,0,UUID` not `/55 setgloss`

#### Dual Channel Mode
- **Problem**: Attachment moved to secondary channel
- **Solution**: Use `/-55` for secondary channel commands
- **Reset**: `/-55 bits,1` to restore default channel

### HUD Issues

#### HUD Not Opening
1. Ensure HUD is attached to screen position
2. Right-click HUD → "Touch" or "Edit"
3. Try detaching and re-attaching HUD
4. Check if HUD needs to be rezzed in-world first

#### Missing Dual Control Buttons
- **Problem**: Enabled dual mode but no extra buttons
- **Solution**: Use `/552 EnableHud` then reopen HUD
- **Revert**: `/552 DisableHud` to remove dual buttons

#### HUD Layout Issues
- **Problem**: Buttons overlapping or misaligned
- **Solution**: Detach HUD, clear cache, re-attach
- **Alternative**: Try different attachment point (Top, Left, etc.)

## Animation and State Issues

### States Not Changing

**Symptoms**: Cock stuck in one state
**Solutions**:
1. Wait for current transition to complete
2. Use `/55 stop` then try new state
3. Check if directplay animation is running (`/55 directstop`)
4. Try `/55 play,0` to reset to flaccid, then desired state

### Jerky or Broken Animations

**Symptoms**: Unnatural movement, stuttering
**Solutions**:
1. Use slower transition speed: `/55 play,STATE,-,0.5`
2. Check for conflicting directplay animations
3. Reset positioning: Use red buttons on HUD
4. Clear all effects: `/55 clean` and `/55 stop`

### Positioning Problems

**Symptoms**: Cock tilted incorrectly, wrong position
**Solutions**:
1. **Reset Tilting**: Use red buttons on States tab
2. **Reset Curves**: `/55 playc,0,0,0`
3. **Reset Global Position**: `/55 tiltrot,<0,0,0,1>` and `/55 bitloc,<0,0,0>`
4. **Check for Tilt Commands**: `/55 tup,0` and `/55 tside,0`

## Visual and Effect Issues

### Particles Not Showing

**Symptoms**: No cum/pee/pre particles visible
**Possible Causes & Solutions**:

#### Particle Settings
1. **Check Fullbright**: `/55 fbright,1`
2. **Check Particle Size**: `/55 particlesize,1.0`
3. **Check Viewer Settings**: Enable particles in Graphics preferences
4. **Reset to Default**: Use HUD Particle Presets

#### Texture Issues
1. **Check Alpha Mode**: Use masking instead of blend for some textures
2. **Check Transparency**: `/551551 wetlayer,0.99` and `/551551 cumlayer,0.99`
3. **Reset Gloss**: `/551551 setgloss,<0.25,0.25,0.25>,<0.25,0.25,0.25>,<0.6,0.6,0.6>,<1,1,1>,166,166,255,255,0,0,0,0`

### Invisible or Missing Parts

**Symptoms**: Parts of attachment not visible
**Solutions**:
1. **Check Hide Status**: `/55 hidebits,1` to show all
2. **Check Alpha**: `/55 hidetip,-1` to show all parts
3. **Check Transparency**: Reset alpha values in customization
4. **Check PBR Settings**: Disable cell-shading `/551551 cel,0,0,0,0`

### Texture Problems

#### Textures Not Applying
1. **Check Channel**: Use `/551551` not `/55`
2. **Check UUID Format**: Ensure proper UUID format
3. **Check Permissions**: Verify texture permissions
4. **Check Slot Name**: Use correct slot names (cock, balls, ctat, etc.)

#### Texture Conflicts
1. **Avatar Conflict**: Adjust `/551551 wetlayer` and `/551551 cumlayer` transparency
2. **Tattoo Conflicts**: Use masking mode for problematic textures
3. **Normal Map Issues**: Use `SKIP_NORMALS,1` for legacy appearance

### Color Issues

**Symptoms**: Colors not applying or wrong colors
**Solutions**:
1. **Check Color Format**: Use LSL color format `<R,G,B>` with 0.0-1.0 values
2. **Check Tint**: Ensure alpha values aren't 0
3. **Reset Colors**: Use HUD color picker to reset
4. **Check Gloss**: Gloss affects apparent color intensity

## Sound Issues

### No Sound Effects

**Symptoms**: Silent effects, no audio feedback
**Solutions**:
1. **Check Master Volume**: `/55 Sound,1`
2. **Check Individual Volumes**: `/55 Sound,1,0.2,0.2,0.4`
3. **Check Viewer Settings**: Enable sound in Audio preferences
4. **Check Custom Sounds**: Reset to defaults with `/55 wetsfx`, `/55 psfx`, `/55 csfx`

### Wrong Sounds Playing
1. **Reset Custom Sounds**: Use parameter-less reset commands
2. **Check Sound Files**: Verify custom sound UUID validity
3. **Check Volume Levels**: Individual volumes may be set too low/high

## Dual Attachment Issues

### Second Attachment Not Working

**Symptoms**: Only one attachment responds in dual mode
**Solutions**:
1. **Check Premium Status**: Dual animesh requires SL Premium
2. **Check Channel Setup**: First attachment should be on `/-55`
3. **Check HUD Mode**: Use `/552 EnableHud` to enable dual controls
4. **Check Attachment Limits**: Verify both attachments are properly attached

### Channel Confusion
1. **Document Channels**: Note which attachment uses which channel
2. **Test Individually**: Control each attachment separately first
3. **Reset if Needed**: `/-55 bits,1` and `/552 DisableHud` to reset

### Third-Party Conflicts
- **Problem**: Other accessories stop working in dual mode
- **Solution**: Revert to single mode for compatibility
- **Note**: Some accessories only work with default channel 55

## Access and Control Issues

### Friend Access Problems

**Symptoms**: Friends can't control attachment
**Solutions**:
1. **Check Access Settings**: `/55 askaccess,1` to enable requests
2. **Check Privacy Mode**: `/55 privacy,1` for public access
3. **Check Friend List**: Use HUD to add friends manually
4. **Clear Access Lists**: Use Stop button to remove all access

### External Control Issues

**Symptoms**: External commands not working
**Solutions**:
1. **Check External Control**: `/55 bedtoggle,1` to enable
2. **Check Ban List**: `/55 cleanban` to clear bans
3. **Check UUID Format**: Verify proper UUID in external commands
4. **Check Command Format**: Use proper `/5515512 UUID,CODE,MESSAGE` syntax

## Performance Issues

### Lag or Slow Response

**Symptoms**: Slow transitions, delayed effects
**Solutions**:
1. **Reduce Particle Complexity**: Lower burst counts and rates
2. **Disable Unused Effects**: Turn off unnecessary visual effects
3. **Check Script Time**: Complex animations may impact performance
4. **Simplify Textures**: Use lower resolution textures if needed

### High Script Load
1. **Disable Message Output**: `/55 msgout,-1` if not needed
2. **Reduce Animation Frequency**: Lower twitching chances
3. **Limit Particle Effects**: Use simpler particle presets

## Model-Specific Issues

### Feline/Canine Configuration Problems

**Symptoms**: Wrong model appearance, settings not applying
**Solutions**:
1. **Check Current Settings**: `/55 peeninfo` to see current configuration
2. **Reset Configuration**: Use HUD settings to restore defaults
3. **Check Parameter Ranges**: Verify values are within valid ranges
4. **Use Incremental Changes**: Change one parameter at a time

### Knot Growth Issues (Knotted Models)
1. **Check Knot Settings**: `/55 kt,15,3` for default
2. **Check Climax Trigger**: Knot growth requires climax state
3. **Force Reset**: Use HUD Stop button to reset knot size

## Data and Compatibility Issues

### Settings Not Saving

**Symptoms**: Settings reset after detach/relog
**Solutions**:
1. **Check Script State**: Settings save automatically but require script run time
2. **Avoid Quick Changes**: Allow time between setting changes
3. **Document Settings**: Note down important configurations manually

### Version Compatibility
- **Old Commands**: Some v1 commands are deprecated, use v2 equivalents
- **Update Required**: Some features require latest version
- **Check Documentation**: Verify command syntax against this documentation

## Emergency Reset Procedures

### Complete Reset
```bash
/55 stop                    # Stop all animations
/55 clean                   # Clean all effects
/55 hidebits,1             # Show all parts
/55 NoConstant             # Reset particle timing
/55 particlesize,1         # Reset particle size
/55 play,0                 # Reset to flaccid
/55 playc,0,0,0           # Reset curvature
/55 Sound,1,0.2,0.2,0.4   # Reset sound
```

### Texture Reset
```bash
/551551 setgloss,<0.25,0.25,0.25>,<0.25,0.25,0.25>,<0.6,0.6,0.6>,<1,1,1>,166,166,255,255,0,0,0,0
/551551 cel,0,0,0,0
/551551 wetlayer,0.99
/551551 cumlayer,0.99
```

### Access Reset
```bash
/55 privacy,0             # Private mode
/55 askaccess,1           # Enable requests
/55 cleanban              # Clear bans
/55 cleanallow            # Clear allowed list
```

## Getting Additional Help

If problems persist after trying these solutions:
1. **Check Version**: Ensure you have the latest version
2. **Test in Different Locations**: Rule out region-specific issues
3. **Test with Different Viewers**: Some issues may be viewer-specific
4. **Contact Support**: Join the support group or contact creators
5. **Check Community Resources**: Other users may have encountered similar issues

## Prevention Tips

1. **Make Incremental Changes**: Test one setting at a time
2. **Document Working Configurations**: Note down successful setups
3. **Regular Resets**: Occasionally use `/55 stop` and `/55 clean`
4. **Keep Backups**: Note important settings before major changes
5. **Update Regularly**: Keep attachment and HUD updated to latest versions
