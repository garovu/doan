### Microservices Breakout

| Microservices | Descriptions | Tech stacks | Deployment environment|
|--|--|--|--|
|User Pages|icremental-site generator|Next.js|Firebase|
|User Service|management portal for user|Next.js|Google Cloud Run|
|Application API|payment and database|Python|Google Cloud Function|
|Database| store transition data| Postgres|Cloud SQL|
|Google Firestore| store user data and setting |GCP|GCP|
### Diagram
```mermaid
flowchart TD
	subgraph inside
	    U(User service) -- write --> G[Google Firestore]
	    L(User pages) -- read-only --- G
	    U ---> API(Application API)
	    API--> D[Database]
	    L -- donate --> API
	    U -- info --> API
    end
    subgraph outside
	    API -- using --- M(Momo API)
	    %% H -- mail --- E(Mailgun) %%
    end

```
