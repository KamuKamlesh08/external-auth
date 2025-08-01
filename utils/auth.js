export const introspectHandler = (req, res) => {
  const incomingAuth = req.headers.authorization;

  if (!incomingAuth) {
    return res.status(401).json({
      error: "Authorization header is missing",
    });
  }

  if (incomingAuth !== process.env.AUTHORIZATION_HEADER) {
    return res.status(403).json({
      error: "Invalid token",
    });
  }

  return res.status(200).json({
    active: true,
    scope: "view_products:project_key",
    sub: "user-12345",
    exp: Math.floor(Date.now() / 1000) + 3600,
    iss: "https://your-introspect-server.com",
  });
};
