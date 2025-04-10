module.exports = {
  apps: [
    {
      name: "backend",
      script: "npm",
      args: "run start:dev",
      cwd: "./backend",
      instances: 1,
      exec_mode: "fork",
      error_file: "./logs/backend_err.log",
      out_file: "./logs/backend_out.log",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "frontend",
      script: "npm",
      args: "run start",
      cwd: "./frontend",
      instances: 1,
      exec_mode: "fork",
      error_file: "./logs/frontend_err.log",
      out_file: "./logs/frontend_out.log",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};