## Core Product Loop

The Workflow Dashboard is built around a simple repeated workflow:

**Decide → Lock In → Focus → Record → Reflect → Decide**

The purpose of the loop is to help the user move from having many possible things they could work on to deliberately choosing meaningful work, completing focused sessions, and using the results of those sessions to decide what to work on next.

### 1. Decide

**User action**

The user determines what deserves their attention next.

They review their goals, projects, and available tasks and select a concrete task to work on.

The product should reduce the friction between opening the dashboard and answering:

> What should I work on right now?

**MVP features supporting this stage**

| Feature   | Role                                            |
| --------- | ----------------------------------------------- |
| Dashboard | Surfaces current priorities and recent activity |
| Goals     | Provides long-term direction                    |
| Projects  | Organizes work toward goals                     |
| Tasks     | Provides specific actionable work               |

---

### 2. Lock In

**User action**

The user deliberately commits to one task for a focused period of time.

Instead of simply marking a task as active, the user starts a Focus Session connected to that task.

The purpose of this stage is to turn intention into commitment.

**MVP features supporting this stage**

| Feature                 | Role                                                |
| ----------------------- | --------------------------------------------------- |
| Tasks                   | Provides the work being selected                    |
| Lock-In / Focus Session | Creates the commitment to work on the selected task |

---

### 3. Focus

**User action**

The user works on the selected task while the Focus Session is active.

During this stage, the product should minimize distractions rather than introduce additional decisions.

The primary product responsibility is to clearly show:

* what the user committed to;
* how long they have been focused;
* the state of the current session.

**MVP features supporting this stage**

| Feature       | Role                                                    |
| ------------- | ------------------------------------------------------- |
| Focus Session | Provides the active focus experience and timer          |
| Task          | Maintains context for what the session is accomplishing |

---

### 4. Record

**User action**

When the session ends, the work is recorded.

The user should not need to manually recreate what happened. The product records the completed Focus Session and connects it to the appropriate task, project, and goal.

This creates a history of actual focused work rather than only a list of intended work.

**MVP features supporting this stage**

| Feature                  | Role                                                   |
| ------------------------ | ------------------------------------------------------ |
| Focus Session            | Produces the completed session record                  |
| Focus History            | Stores and displays previous sessions                  |
| Tasks / Projects / Goals | Provide context for where the focused work contributed |

---

### 5. Reflect

**User action**

The user reviews what they have actually been spending time on.

The goal is not complex productivity analysis. The MVP should provide enough information for the user to understand their recent behavior and make a better next decision.

Examples include:

* how much focused work was completed;
* which projects received attention;
* which goals received attention;
* recent Focus Sessions;
* whether the user has been consistently showing up.

**MVP features supporting this stage**

| Feature         | Role                                       |
| --------------- | ------------------------------------------ |
| Focus History   | Shows completed Focus Sessions             |
| Basic Analytics | Summarizes focus by day, project, and goal |
| Basic Streak    | Shows consistency over time                |
| Dashboard       | Surfaces recent progress and activity      |

After reflecting, the user returns to **Decide**, beginning the loop again.

---

## MVP Feature-to-Loop Validation

| MVP Feature             | Product Loop Stage             |
| ----------------------- | ------------------------------ |
| Dashboard               | Decide, Reflect                |
| Goals                   | Decide, Record, Reflect        |
| Projects                | Decide, Record, Reflect        |
| Tasks                   | Decide, Lock In, Focus, Record |
| Lock-In / Focus Session | Lock In, Focus, Record         |
| Focus History           | Record, Reflect                |
| Basic Streak            | Reflect                        |
| Basic Analytics         | Reflect                        |

Every major MVP feature supports at least one part of the core product loop.

Features that do not strengthen this loop should generally remain outside the MVP unless they become necessary to support one of these stages.
