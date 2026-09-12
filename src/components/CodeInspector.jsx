import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Copy, Check } from 'lucide-react'

const CodeInspector = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('client')
  const [copied, setCopied] = useState(false)

  const codeSnippets = {
    client: {
      title: 'Client Handler',
      language: 'lua',
      code: `-- Combat Client Handler
local combatClient = {}
local raycaster = Raycast.new()
local comboState = { count = 0, lastHit = 0 }

function combatClient:OnAttack(inputType)
  local now = tick()
  
  -- Reset combo if timeout exceeded
  if (now - self.lastHit) > 1.5 then
    comboState.count = 0
  end
  
  -- Increment combo
  comboState.count = comboState.count + 1
  comboState.lastHit = now
  
  -- Play animation
  local animTrack = self:PlayAnimation(inputType, comboState.count)
  
  -- Fire raycast hitbox
  self:FireRaycastBox(animTrack.TimeLength)
end

function combatClient:FireRaycastBox(duration)
  local hitPlayers = {}
  local origin = self.character.HumanoidRootPart.Position
  
  for i = 1, duration * 60 do
    local hits = raycaster:FindHits(origin, self.character.Humanoid.MoveDirection * 50)
    
    for _, hit in ipairs(hits) do
      if not hitPlayers[hit.Parent] then
        hitPlayers[hit.Parent] = true
        self:SendHitEvent(hit.Parent, comboState.count)
      end
    end
    
    game:GetService('RunService').RenderStepped:Wait()
  end
end

return combatClient`,
    },
    server: {
      title: 'Server Framework',
      language: 'lua',
      code: `-- Server-Authoritative Combat Framework
local combatServer = {}
local damageConfig = {
  [1] = { damage = 15, knockback = 30 },
  [2] = { damage = 20, knockback = 45 },
  [3] = { damage = 30, knockback = 60 },
}

local combatEvents = game:GetService('ReplicatedStorage'):WaitForChild('CombatEvents')

function combatServer:OnClientHit(player, targetPlayer, comboCount)
  -- Validate combo count
  if not damageConfig[comboCount] then return end
  
  local config = damageConfig[comboCount]
  
  -- Apply damage
  targetPlayer.Character.Humanoid:TakeDamage(config.damage)
  
  -- Calculate knockback direction
  local direction = (targetPlayer.Character.HumanoidRootPart.Position - 
                    player.Character.HumanoidRootPart.Position).Unit
  
  -- Apply velocity
  local bodyVelocity = Instance.new('BodyVelocity')
  bodyVelocity.Velocity = direction * config.knockback
  bodyVelocity.Parent = targetPlayer.Character.HumanoidRootPart
  
  game:GetService('Debris'):AddItem(bodyVelocity, 0.1)
  
  -- Fire damage event
  combatEvents.OnHit:FireAllClients(targetPlayer, config.damage, comboCount)
end

combatEvents.ClientHit.OnServerEvent:Connect(function(player, target, combo)
  combatServer:OnClientHit(player, target, combo)
end)

return combatServer`,
    },
    network: {
      title: 'Network Replicator',
      language: 'lua',
      code: `-- Network Optimization & Replication
local networkOptimizer = {}
local UPDATE_RATE = 1/20 -- 20 updates per second
local DISTANCE_THRESHOLD = 128

function networkOptimizer:ShouldReplicate(player1, player2)
  local pos1 = player1.Character and player1.Character:FindFirstChild('HumanoidRootPart')
  local pos2 = player2.Character and player2.Character:FindFirstChild('HumanoidRootPart')
  
  if not (pos1 and pos2) then return false end
  
  local distance = (pos1.Position - pos2.Position).Magnitude
  return distance < DISTANCE_THRESHOLD
end

function networkOptimizer:OptimizeUpdate(player, data)
  -- Compress vector data
  local compressed = {
    x = math.round(data.position.X * 100) / 100,
    y = math.round(data.position.Y * 100) / 100,
    z = math.round(data.position.Z * 100) / 100,
  }
  
  return compressed
end

local gameLoop = game:GetService('RunService').Heartbeat
local lastUpdate = tick()

gameLoop:Connect(function()
  if tick() - lastUpdate < UPDATE_RATE then return end
  lastUpdate = tick()
  
  local players = game:GetService('Players'):GetPlayers()
  
  for _, player in ipairs(players) do
    for _, otherPlayer in ipairs(players) do
      if player ~= otherPlayer then
        if networkOptimizer:ShouldReplicate(player, otherPlayer) then
          -- Send updates only to relevant clients
          local data = networkOptimizer:OptimizeUpdate(player, {})
          -- Fire event with compressed data
        end
      end
    end
  end
end)

return networkOptimizer`,
    },
  }

  const currentCode = codeSnippets[activeTab]

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-lg overflow-hidden glow-border"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-neon-cyan/20 bg-slate-900/50">
          <h3 className="text-xl font-bold font-mono text-neon-cyan">CODE // INSPECTOR</h3>
          <motion.button
            onClick={onClose}
            className="p-2 hover:text-neon-cyan transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neon-cyan/20 px-6 bg-slate-900/30">
          {Object.keys(codeSnippets).map((key) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-3 font-mono font-semibold text-sm uppercase tracking-wider transition-all ${
                activeTab === key
                  ? 'text-neon-cyan border-b-2 border-neon-cyan'
                  : 'text-gray-400 hover:text-neon-cyan'
              }`}
              whileHover={{ color: '#00F0FF' }}
            >
              {key}
            </motion.button>
          ))}
        </div>

        {/* Code Container */}
        <div className="overflow-auto max-h-[calc(90vh-180px)] relative">
          <pre className="p-6 font-mono text-sm leading-relaxed text-gray-300 whitespace-pre-wrap break-words">
            <code>{currentCode.code}</code>
          </pre>
          
          {/* Copy Button */}
          <motion.button
            onClick={handleCopy}
            className="absolute top-6 right-6 p-2 glass-panel rounded-lg text-neon-cyan hover:text-white transition-colors"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </motion.button>
        </div>

        {/* Footer Info */}
        <div className="px-6 py-4 border-t border-neon-cyan/20 bg-slate-900/50 text-xs text-gray-400">
          <p>Luau • Server-Authoritative • Network Optimized</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CodeInspector