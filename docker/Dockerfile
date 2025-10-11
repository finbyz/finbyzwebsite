# -------------------------
# 1. BUILD STAGE
# -------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files first
COPY ../package*.json ./
RUN npm install --frozen-lockfile

# Copy all app files
COPY .. .

# Build Next.js app
RUN npm run build

# -------------------------
# 2. RUNNER STAGE
# -------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev --frozen-lockfile

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.env* ./

EXPOSE 3000

CMD ["npm", "start"]
