import Head from "next/head"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "../lp-items"

export default function login() {
    
  return (
    <>
      <div>
      <h1>Login</h1>
      <form >
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
          />
          {/* {errors.email && <span className="error">{errors.email}</span>} */}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
          {/* {errors.password && <span className="error">{errors.password}</span>} */}
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
    </>
  )
}
