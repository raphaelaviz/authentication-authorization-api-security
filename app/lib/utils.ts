'use server'

export async function registerUser(name: string, email: string, password: string, role: string) {
    const response = await fetch(`${process.env.API_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, role }),
    });
  
    const data = await response.json();
    return { data, ok: response.ok };
  }
  