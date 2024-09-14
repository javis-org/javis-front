import {useState, useEffect} from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";
import {client} from "../api";
import {useRecoilValue} from "recoil";

export default function Menu1() {
  const memberId = useRecoilValue();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navi = useNavigate();
  console.log(memberId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.get(`/jobPostings?memberId=${memberId}`);
        // console.log(data.data);
        setPosts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (postId) => {
    const deleteData = async () => {
      //  서버 쪽이 구현이 안되어 있음
      // await client.delete(`/jobPostings/${postId}`);
    };
    deleteData();
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      post.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop    : 8,
          display      : "flex",
          flexDirection: "column",
          alignItems   : "center",
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          게시판
        </Typography>

        {/* 검색 필드 */}
        <TextField
          fullWidth
          placeholder="검색..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{mb: 3}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{mb: 3}}
          onClick={() => {
            navi("/menu1/CompanyAddForm");
          }}
        >
          글 작성
        </Button>
        {/* 게시물 목록 */}
        <Box sx={{width: "100%"}}>
          <Typography component="h2" variant="h5" gutterBottom>
            게시물 목록
          </Typography>
          <List>
            {filteredPosts.map((post) => (
              <Box key={post.id} sx={{position: "relative", marginBottom: 2}}>
                <Paper
                  sx={{padding: 2}}
                  style={{cursor: "pointer"}}
                  onClick={() => {
                    navi(`/menu1/item/${post.id}`);
                  }}
                >
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    sx={{
                      position: "absolute",
                      top     : 8,
                      right   : 15,
                    }}
                  >
                    <DeleteIcon
                      sx={{zIndex: "1000"}}
                      onClick={(e) => {
                        e.stopPropagation(); // 이벤트 전파를 중지하여 카드 클릭 이벤트가 발생하지 않도록 함
                        handleDelete(post.id); // 삭제 처리
                      }}
                    />
                  </IconButton>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={
                        <Typography
                          component="span"
                          variant="h6"
                          color="text.primary"
                        >
                          {post.title}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {post.company}
                          </Typography>
                          <Divider sx={{my: 1}}/>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {format(
                              new Date(post.createdAt || Date.now()),
                              "yyyy-MM-dd HH:mm:ss"
                            )}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </Paper>
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
}
