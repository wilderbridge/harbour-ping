FROM node:24-alpine
ENV NODE_ENV=production PORT=8080
WORKDIR /app
COPY --chown=node:node package.json server.mjs page.mjs ./
USER node
EXPOSE 8080
CMD ["node", "server.mjs"]
